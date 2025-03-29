import { useState } from 'react'
import { getMyProfile } from '../../apis/users/auth';
import { userStore } from '../../states';
import { StorageService } from '../storage/storageService';


const storageService = StorageService.instance

export const useAuth = () => {
  const {
    user,
    update,
    clear,
  } = userStore((state) => state)
  const [userState, setUser] = useState(user);

  const setLoggedUserState = async (
    accessToken: string,
    refreshToken: string
  ) => {
    storageService.set('access', accessToken)
    storageService.set('refresh', refreshToken)
    const response = await getMyProfile()
    if (response.error) {
      console.error(response.error)
      clearUserState()
      return
    }
    console.info(response.data)
    update(response.data!)
    setUser(response.data!)
  }

  const clearUserState = () => {
    clear()
    setUser(Object({}))
  }


  return { userState, setLoggedUserState, clearUserState }
}
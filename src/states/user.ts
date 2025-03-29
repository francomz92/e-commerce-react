import { create } from "zustand";
import { MyProfileResponse} from '../schemas/users';
import { persist } from "zustand/middleware";



interface UserState {
  user: MyProfileResponse
  update: (newState: MyProfileResponse) => void
  clear: () => void
}

// const myMiddlewares = (f: StateCreator<UserState>) => devtools(
//   persist(f, { name: 'bearStore' })
// )

export const userStore = create<UserState>()(
  persist(
    (set) => ({
      user: Object({}),
      update: (newState) => {
        set(() => ({ user: newState }))
      },
      clear: () => {
        set(() => ({ user: Object({}) }))
      }
    }),
    { name: 'userStore' }
  )
)

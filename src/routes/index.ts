import { RouteObject } from "react-router-dom";
import SignUp from '../pages/users/SignUp';
import SingIn from '../pages/users/SignIn';


const routes: RouteObject[] = [
  { path: '/', element: '<div>Home</div>', index: true },
  { path: '/sign-up', Component: SignUp },
  { path: '/sign-in', Component: SingIn },
]

export default routes

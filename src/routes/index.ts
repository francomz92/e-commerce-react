import { RouteObject } from "react-router-dom";
import SignUp from '../pages/users/SignUp';


const routes: RouteObject[] = [
  { path: '/', element: '<div>Home</div>', index: true },
  { path: '/sign-up', Component: SignUp },
]

export default routes

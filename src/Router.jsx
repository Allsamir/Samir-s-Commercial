import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./Pages/Home"
import ErrorPage from "./Pages/ErrorPage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import UpdateProfile from "./Pages/UpdateProfile"
import CommercialSpaces from "./Pages/CommercialSpaces"


const router = createBrowserRouter([{
          path: "/",
          element: <App />,
          children: [{
                    path: "/",
                    element: <Home />
          },
         {
          path: "/login",
          element: <Login />
         },
         {
          path: "/register",
          element: <Register />
         },
         {
          path: "/profile",
          element: <Profile />
         },
         {
          path: "/update-profile",
          element: <UpdateProfile />
         },
         {
          path: "/commercial-spaces",
         element: <CommercialSpaces />
         }
],
          errorElement: <ErrorPage />
}])
export default router
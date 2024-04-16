import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import UpdateProfile from "./Pages/UpdateProfile";
import CommercialSpaces from "./Pages/CommercialSpaces";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import EstateDetails from "./components/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const res = await fetch(
              "https://allsamir.github.io/real-state.json.host/real-state.json",
            );
            const data = await res.json();
            return data;
          } catch (error) {
            console.error(error);
          }
        },
      },
      {
        path: "estate/:estateId",
        element: (
          <ProtectedRoute>
            <EstateDetails />
          </ProtectedRoute>
        ),
        loader: async () => {
          try {
            const res = await fetch(
              "https://allsamir.github.io/real-state.json.host/real-state.json",
            );
            const data = await res.json();
            return data;
          } catch (err) {
            console.error(err);
          }
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/commercial-spaces",
        element: (
          <ProtectedRoute>
            <CommercialSpaces />
          </ProtectedRoute>
        ),
        loader: async () => {
          try {
            const res = await fetch(
              "https://allsamir.github.io/real-state.json.host/real-state.json",
            );
            const data = await res.json();
            return data;
          } catch (error) {
            console.error(error);
          }
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;

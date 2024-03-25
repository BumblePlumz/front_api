import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import { action as logoutAction } from "./pages/Logout";
import HomePage from "./pages/HomePage";
import RidePage from "./pages/RidePage";
import RideDetails from "./pages/RideDetails";
import ProfilPage from "./pages/ProfilPage";
import UserPage from "./pages/UserPage";
import "./App.css";
import AuthenticationPage, {
  action as authAction,
} from "./pages/AuthenticationPage";
import { tokenLoader, checkAuthLoader as checkToken } from "./util/auth";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <AuthenticationPage />,
      },
      {
        path: "/Authentification",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
      {
        path: "/Accueil",
        element: <HomePage />,
      },
      {
        path: "/Trajets",
        element: <RidePage />,
        loader: checkToken,
        children: [{ path: "trajet/:rideId", element: <RideDetails /> }],
      },
      {
        path: "/Profil",
        element: <ProfilPage />,
      },
      {
        path: "/Utilisateur",
        element: <UserPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

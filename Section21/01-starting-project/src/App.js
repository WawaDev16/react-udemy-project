import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import UserDetail from "./pages/UserDetail";
import AuthenticationPage from "./pages/Authentication";
import { authLoader, checkAuthLoader, tokenLoader } from "./Auth";
import { action as logoutAction } from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage />, loader: checkAuthLoader },
      {
        path: "/auth",
        element: <AuthenticationPage />,
        loader: authLoader,
      },
      { path: "/about", element: <About />, loader: checkAuthLoader },
      { path: "/contact", element: <Contact />, loader: checkAuthLoader },
      { path: "/users", element: <User />, loader: checkAuthLoader },
      {
        path: "/users/:userId",
        element: <UserDetail />,
        loader: checkAuthLoader,
      },
      { path: "/logout", action: logoutAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

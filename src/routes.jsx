import { createBrowserRouter } from "react-router-dom";
import Tasks from "./pages/tasks/tasks";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import NotFound from "./pages/404/notFound";
import { SonnerDemo } from "./pages/demo";
import PrivateRoutes from "./privateRoutes/privateRoutes";

export const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "demo",
    element: <SonnerDemo />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

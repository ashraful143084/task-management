import { createBrowserRouter } from "react-router-dom";
import Tasks from "./pages/tasks/tasks";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import NotFound from "./pages/404/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks />,
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
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { TasksContextProvider } from "./context/task.context";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TasksContextProvider>
        <RouterProvider router={router} />
      </TasksContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster richColors />
    </QueryClientProvider>
  </StrictMode>
);

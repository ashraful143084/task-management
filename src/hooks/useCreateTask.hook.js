import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

const createTask = async (formData) => {
  console.log("Form Data from Hook", formData);
  const token = Cookies.get("token");
  const response = await fetch(`${import.meta.env.VITE_API_URL}tasks/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export const useCreateTask = () => {
  return useMutation({
    mutationFn: createTask,
    onSuccess: (response) => {
      console.log("Task created successfully", response);
    },
    onError: (err) => {
      console.log("Error occur when creating Task", err);
    },
  });
};

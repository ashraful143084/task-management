import { useMutation } from "@tanstack/react-query";

const createUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export const useSignup = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: (response) => {
      console.log("User created successfully", response);
    },
    onError: (err) => {
      console.log("Error occur when creating user", err);
    },
  });
};

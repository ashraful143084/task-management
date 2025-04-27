import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/gm
);

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters",
    })
    .max(100, {
      message: "First name can not be more than 100 characters",
    }),

  lastName: z
    .string()
    .max(100, {
      message: "Last name can not be more than 100 characters",
    })
    .optional(),

  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().regex(passwordRegex, {
    message:
      "password must be minimum 8 characters included at least one number , one uppercase letter, one lowercase letter and one special characters",
  }),
});

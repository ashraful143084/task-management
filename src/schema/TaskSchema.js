import { z } from "zod";

export const TaskSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "First name must be at least 2 characters",
    })
    .max(100, {
      message: "The title cannot be more than 100 characters",
    }),

  dueDate: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),

  description: z.string().max(500, {
    message: "The description cannot be more than 500 characters",
  }),
  status: z.enum(["todo", "inProgress", "completed"]),
  priority: z.enum(["low", "normal", "high"]),
  taskFile: z.any().optional(),
});

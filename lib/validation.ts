import { z } from "zod";

export const formSchema = z.object({
  message: z.string().trim().min(1).max(400),
});

import { z } from "npm:zod@3.25.76";

export const inquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(30),
  message: z.string().trim().max(1000).optional(),
});
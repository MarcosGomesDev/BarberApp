import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().nullable(),
  password: z.string().nullable(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

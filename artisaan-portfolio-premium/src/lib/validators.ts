import { z } from 'zod';

export const contactSchema = z
  .object({
    name: z.string().min(2, 'Please share your name'),
    email: z.string().email('Use a valid email'),
    message: z.string().min(20, 'Tell us a little more so we can help'),
    company: z.string().optional(),
    honeypot: z.string().max(0),
  })
  .strict();

export type ContactFormValues = z.infer<typeof contactSchema>;

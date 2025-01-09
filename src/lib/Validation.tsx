import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const SignupSchema = LoginSchema.extend({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

export const QuestionSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

export const ShippingAddressSchema = z.object({
  userId: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  address1: z.string().min(3),
  address2: z.string().optional(),
  country: z.enum(["United States", "Canada", "Cambodia"]),
  state: z.string().min(3),
  zipCode: z.string().min(3),
  phone: z.string().min(3),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignupSchemaType = z.infer<typeof SignupSchema>;
export type QuestionSchemaType = z.infer<typeof QuestionSchema>;

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
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  address1: z.string().min(1, "Address Line 1 is required"),
  address2: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip Code is required"),
  phone: z.string().min(1, "Phone Number is required"),
  userId: z.string().min(1, "User ID is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignupSchemaType = z.infer<typeof SignupSchema>;
export type QuestionSchemaType = z.infer<typeof QuestionSchema>;

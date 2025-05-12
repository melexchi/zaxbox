import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6,"Password must not be less that 6 characters")
});


export const RegisterSchema = z.object({
    name: z.string().min(3, "Name must be atlest 3 characters"),
    email: z.string().email("invalid Email Address"),
    password: z.string().min(6,"password must not be less that 6 characters")
});

export type LoginFormData = z.infer<typeof LoginSchema>;
export type RegisterFormData = z.infer<typeof RegisterSchema>;
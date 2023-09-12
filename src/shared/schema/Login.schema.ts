import {z} from "zod";

export const LoginSchema = z.object({
  email: z.string().trim()
    .nonempty("Informe o e-mail")
    .email("E-mail inválido"),
  password: z.string().trim()
    .nonempty("Informe a senha")
})

export type LoginSchemaType = z.infer<typeof LoginSchema>
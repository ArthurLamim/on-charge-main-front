import {z} from "zod";
import {cpf} from "cpf-cnpj-validator";

export const SignInSchema = z.object({
  email: z.string().email("E-mail deve ser válido")
    .nonempty("Email é obrigatório"),
  password: z.string().trim().nonempty("Senha é obrigatória")
    .min(6, "Deve ter no mínimo 6 caracteres")
    .refine((password) => {
      return password.match(/[a-z]/) && password.match(/[A-Z]/)
    }, "Deve ter no mínimo um caractere maísculo e um minúsculo")
    .refine((password) =>
      password.match(/[^a-zA-Z\d]/),
      "Deve ter no mínimo um caracter especial"
    ),
  confirmPassword: z.string().trim(),
  nomeUsuario: z.string().nonempty("Nome é obrigatório"),
  cpfUsuario: z.string().nonempty("CPF é obrigatório").trim()
    .refine((_cpf) =>
      cpf.isValid(_cpf), "CPF deve ser válido"
    ),
  dataNascimento: z.coerce.date().max(new Date(), "Data não pode ser superior ao dia atual")
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Senhas não conferem",
});




export type SignInSchemaType = z.infer<typeof SignInSchema>
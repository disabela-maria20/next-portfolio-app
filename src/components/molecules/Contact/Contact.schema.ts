import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string()
    .min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('O nome é obrigatório'),
  email: z.string()
    .email('Formato de e-mail invalido')
    .nonempty('O nome é obrigatório'),
  message: z.string()
    .min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('O nome é obrigatório'),
})
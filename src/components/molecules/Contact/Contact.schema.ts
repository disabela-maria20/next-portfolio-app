import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string()
    .min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('O nome é obrigatório')
    .transform((name) => name.trim().split(' ').map(data => {
      return data[0].toLocaleUpperCase().concat(data.substring(1))
    }).join(' ')),
  subject: z.string().min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('O assunto é obrigatório'),
  email: z.string()
    .email('Formato de e-mail invalido')
    .toLowerCase()
    .nonempty('O nome é obrigatório'),
  message: z.string()
    .min(3, { message: 'A qualidade de caracteres minimas é 5' })
    .nonempty('A mensagem é obrigatório'),
})
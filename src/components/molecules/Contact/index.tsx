import { useForm } from "react-hook-form";
import { ContactForm } from "./type";
import { Button } from "@/components/atoms";
import { contactFormSchema } from "./Contact.schema";
import { zodResolver } from '@hookform/resolvers/zod';



     
const Contact = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = (data: ContactForm) => {
    console.log(JSON.stringify(data, null, 2))
  };

  console.log("errors")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-26 pt-26 ">

      <label htmlFor="nome" className="col-span-2 md:col-span-1">
        <span className="hidden">Nome</span>
        <input
          type="text"
          id="nome"
          className="input-subject"
          placeholder="Nome"
          {...register('name')}
        />
        {errors.name && <small className="text-error">{errors.name.message}</small>}
      </label>
      <label htmlFor="email" className="col-span-2 md:col-span-1">
        <span className="hidden"> E-mail</span>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          className="input-subject"
          {...register('email')}
        />
        {errors.email && <small className="text-error">{errors.email.message}</small>}
      </label>

      <label htmlFor="subject" className="col-span-2">
        <span className="hidden">Assunto</span>
        <input
          type="text"
          id="subject"
          placeholder="Assusto"
          className="input-subject"
          {...register('subject')}
        />
        {errors.subject && <small className="text-error">{errors.subject.message}</small>}
      </label>

      <label htmlFor="message" className="col-span-2">
        <span className="hidden ">Mensagem</span>
        <textarea
          id="message"
          placeholder="Mensagem"
          className="input-subject-textarea"
          {...register('message')}
        />
        {errors.message && <small className="text-error">{errors.message.message}</small>}
      </label>
      <div className="col-span-2">
        <Button type="submit" styleType="btn-contacts">Enviar</Button>
      </div>

    </form>
  )
}

export default Contact

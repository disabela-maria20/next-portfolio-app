import { useForm } from "react-hook-form";
import { ContactForm } from "./type";
import { Button } from "@/components/atoms";

const Contact = (): JSX.Element => {
  const { register, handleSubmit } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    console.log(JSON.stringify(data, null, 2))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-26 py-55 ">

      <label htmlFor="nome" className="col-span-2 md:col-span-1">
        <span className="hidden">Nome</span>
        <input
          type="text"
          id="nome"
          className="input-subject"
          placeholder="Nome"
          {...register('name')}
        />
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
      </label>

      <label htmlFor="message" className="col-span-2">
        <span className="hidden ">Mensagem</span>
        <textarea
          id="message"
          placeholder="Mensagem"
          className="input-subject-textarea"
          {...register('message')}
        />
      </label>
      <div className="col-span-2">
        <Button type="submit" styleType="btn-contacts">Enviar</Button>
      </div>

    </form>
  )
}

export default Contact


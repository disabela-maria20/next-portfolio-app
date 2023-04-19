import { useForm } from "react-hook-form";
import { ContactForm } from "./type";

const Contact = (): JSX.Element => {
  const { register, handleSubmit } = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    console.log(JSON.stringify(data, null, 2))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          {...register('name')}
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register('email')}
        />
      </div>

      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          {...register('message')}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Contact


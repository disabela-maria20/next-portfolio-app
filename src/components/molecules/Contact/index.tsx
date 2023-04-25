import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { ContactForm } from "./type";
import { Button } from "@/components/atoms";
import { contactFormSchema } from "./Contact.schema";
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser'
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import Modal from "../Modal";
import ReCAPTCHA from "react-google-recaptcha"
import { Zoom } from 'react-awesome-reveal';

const Contact = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [modal, setModal] = useState<boolean>(true)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema)
  })

  const recaptchaRef = useRef<ReCAPTCHA>()

  const onSubmit = async (data: ContactForm) => {

    setIsLoading(true)

    const captchaToken = await recaptchaRef?.current?.executeAsync()

    const template = {
      from_name: data.name,
      message: `${data.subject} \n \n ${data.message}`,
      email: data.email,
      'g-recaptcha-response': captchaToken,
    }

    emailjs.send('service_hq17tyc', 'template_r7pe6yw', template, 'cyC_OUsuGSGLF7Ly3')
      .then(() => {
        // reset()
        setIsLoading(false)
        setModal(false)
        recaptchaRef?.current?.reset();
      }, (error) => {
        console.log(error.text);
        setIsLoading(false)
      });

  };

  return (
    <>
      <Modal modal={!modal} setModal={setModal} />
      <Zoom direction='up' duration={1200} triggerOnce={true} cascade>
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
            <div className="hidden">
              <ReCAPTCHA
                ref={recaptchaRef as React.RefObject<ReCAPTCHA>}
                sitekey={process.env.KEY_RECAPTCHA || ''}
                size="invisible"
              />
            </div>

            <Button type="submit" styleType="btn-contacts">
              {isLoading ? <span className="ml-8">
                <BeatLoader color="#000000" size={8} />
              </span> : 'Enviar'}
            </Button>
          </div>
        </form>
      </Zoom>

    </>

  )
}

export default Contact

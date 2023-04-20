import React from 'react'
import { Title } from '../../atoms'
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"

const About = (): JSX.Element => {
  return (
    <section className='container m-auto p-15' id='sobre'>
      <div className='mt-26 md:my-55 mb:mb-38'>
        <Title>Sobre Mim </Title>
      </div>
      <div className='grid lg:grid-cols-3 gap-31 md:gap-45 items-center'>
        <article className='m-auto md:col-span-2 lg:col-span-1'>
          <img src='./img/profile-pic.png' width="auto" height="auto" alt='Foto da desenvolvedora' className='w-3/4 m-auto lg:w-full' />
        </article>
        <article className='md:col-span-2'>
          <h3 className='mb-18'>Isabela M. Ribeiro</h3>
          <p className='mb-15 leading-paragraph'>Eu sou uma profissional formada em Análise e Desenvolvimento de Sistemas com dois anos de experiência na área de desenvolvimento de front-end. Meu interesse pela área surgiu durante o curso técnico em informática, e desde então, tenho me dedicado a me tornar uma referência na área.</p>
          <p className='mb-18 leading-paragraph'>Ao longo da minha trajetória, eu trabalhei com diversas tecnologias de desenvolvimento, mas minha especialidade é na programação reativa do React.js & Next.js. Sempre priorizando a performance e utilizando conceitos como SOLID, Mobile First, Atomic Design, já participei de entregas de produtos de alta qualidade no mercado, como Experimentador e Brandlovrs.</p>
          <div className='flex items-center justify-between mt-15'>
            <div className='grid grid-cols-3 items-center'>
              <a href='https://www.linkedin.com/in/isabela-maria-ribeiro/' target='_blank' className='mr-8'>
                <FaInstagram className='text-gray-900 text-22 hover:text-yellow transition-colors' />
                <span className='hidden'>instagram</span>
              </a>
              <a href='https://www.linkedin.com/in/isabela-maria-ribeiro/' target='_blank' className='mr-8'>
                <FaLinkedin className='text-gray-900 text-22 hover:text-yellow transition-colors' />
                <span className='hidden'>linkedin</span>
              </a>
              <a href='mailto:isabela10014@hotmail.com' target='_blank' className='mr-8'>
                <FaEnvelope className='text-gray-900 text-22 hover:text-yellow transition-colors' />
                <span className='hidden'>e-mail</span>
              </a>
            </div>
            <div>
              <a href="/pdf/CV-Isabela-M-Ribeiro-Front-End.pdf" className='link-outline-black' download>
                currículo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About 
import React from 'react'
import { Contact } from '../../molecules'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'


const Footer = (): JSX.Element => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-gray-900' id="contato">
      <>
        <h2 className='text-white text-center pt-66 sm:pt-95 pb-38'>Entre em <span className='text-yellow'>contato</span> </h2>
      </>

      <div className='container m-auto px-15'>
        <article className='grid lg:grid-cols-3 gap-26'>
          <>
            <div className='p-15 bg-gray-800 rounded-sm'>
              <h3 className='h-31 mb-18'>
                <div className='p-4 bg-yellow inline-block'>
                  <FaMapMarkerAlt className='text-18' />
                </div>
                <span className='text-22 ml-4 text-white'>Local</span>
              </h3>
              <p className='text-gray-200 flex-1 text-15 '>
                <span>São Paulo - SP | São Miguel Pta</span>
              </p>
            </div>
          </>
          <>
            <div className='p-15 bg-gray-800 rounded-sm'>
              <h3 className='h-31 mb-18'>
                <div className='p-4 bg-yellow inline-block'>
                  <FaPhoneAlt className='text-18' />
                </div>
                <span className='text-22 ml-4 text-white'>Telefone</span>
              </h3>
              <a href='tel:011955905953' target='_blank' title='Telefone' aria-label="Telefone do desenvolvedor" className='font-serif mr-8 text-gray-200 flex-1  text-15'>
                (011)95590-5953
              </a>
            </div>
          </>
          <>
            <div className='p-15 bg-gray-800 rounded-sm'>
              <h3 className='h-31 mb-18'>
                <div className='p-4 bg-yellow inline-block'>
                  <FaEnvelope className='text-18' />
                </div>
                <span className='text-22 ml-4 text-white'>E-mail</span>
              </h3>
              <a href='mailto:dev@isabelamribeiro.com.br' target='_blank' title='E-mail' aria-label="E-mail do desenvolvedor" className='font-serif mr-8 text-gray-200 flex-1  text-15'>
                dev@isabelamribeiro.com.br
              </a>
            </div>
          </>
        </article>
        <Contact />
        <p className='text-center font-sans py-6 text-gray-500 text-13  border-t-[1px] border-solid border-gray-800 mt-26'> Isabela M. Ribeiro |  {year}</p>
      </div>
    </footer>
  )
}

export default Footer 
import React from 'react'
import { Contact } from '../../molecules'

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-gray-900'>
      <h2 className='text-white text-center pt-66 pb-18'>Entre em <span className='text-yellow'>contato</span> </h2>
      <div className='container m-auto px-15'>
        <Contact />
      </div>
    </footer>
  )
}

export default Footer 
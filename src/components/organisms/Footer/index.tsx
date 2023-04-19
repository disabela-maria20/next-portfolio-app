import React from 'react'
import { Contact } from '../../molecules'

const Footer = (): JSX.Element => {
  return (
    <footer className='bg-gray-900'>
      <div className='container m-auto px-15'>
        <section className="grid md:grid-cols-2">
          <Contact />
          <div></div>
        </section>
        <section>

        </section>
      </div>
    </footer>
  )
}

export default Footer 
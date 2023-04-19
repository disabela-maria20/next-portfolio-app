/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { About, Experience, Footer, Header, Projects, Skills } from '../../organisms'


const THome = (): JSX.Element => {
  return <>
    <Header />
    <main>
      <About />
      <Experience />
      <Projects />
      <Skills />
    </main>
    <Footer />
  </>
}

export default THome 

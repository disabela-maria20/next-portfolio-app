import React from 'react'
import Timeline from '../../molecules/Timeline'
import { Slide } from 'react-awesome-reveal'

const Experience = (): JSX.Element => {
  return (
    <div className='container m-auto px-15'>
      <Slide direction='up' duration={500} triggerOnce={true}>
        <h2 className='text-center font-bold text-26 sm:text-31 my-38 md:mt-95 md:mb-55'>Experiências </h2>
      </Slide>
      <Slide direction='up' duration={600} triggerOnce={true}>
        <section className='w-full mx-auto lg:max-w-3xl'>
          <Timeline />
        </section>
      </Slide>

    </div >
  )
}

export default Experience 
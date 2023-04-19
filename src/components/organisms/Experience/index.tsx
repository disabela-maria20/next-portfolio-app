import React from 'react'
import Timeline from '../../molecules/Timeline'

const Experience = (): JSX.Element => {
  return (
    <div className='container m-auto px-15'>
      <h2 className='text-center font-bold text-26 sm:text-31 my-38 md:mt-95 md:mb-55'>Experiências </h2>
      <section className='w-full mx-auto lg:max-w-3xl'>
        <Timeline />
      </section>
    </div >
  )
}

export default Experience 
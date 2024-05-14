import React from 'react'
import Timeline from '../../molecules/Timeline'
import { Title } from '@/components/atoms'

const Experience = (): JSX.Element => {
  return (
    <div className='container m-auto px-15'>
        <Title>Experiências </Title>
        <section className='w-full mx-auto container mt-38'>
          <Timeline />
        </section>
    </div >
  )
}

export default Experience 
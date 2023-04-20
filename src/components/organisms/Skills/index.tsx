import React from 'react'
import { Title } from '../../atoms'
import { SkillsItem } from '../../molecules'

const Skills = (): JSX.Element => {

  return (
    <div className="container m-auto px-15 mb-79 sm:mb-136">
      <div className='mt-31 '>
        <Title>Skills</Title>
        <p className="mb-22">
          Durante minha carreira como desenvolvedora front-end, tive a
          oportunidade de trabalhar com diversas tecnologias que me permitiram
          criar interfaces funcionais. Algumas das tecnologias com as quais já
          trabalhei incluem:
        </p>
      </div>
      <SkillsItem />
    </div >
  )
}

export default Skills 
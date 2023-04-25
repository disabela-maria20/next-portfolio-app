import React from 'react'
import { Title } from '../../atoms'
import { SkillsItem } from '../../molecules'
import { Slide } from 'react-awesome-reveal'

const Skills = (): JSX.Element => {

  return (
    <div className="container m-auto px-15 mb-79 sm:mb-136" id="habilidade">
      <div className='mt-31 '>
        <Slide direction='up' duration={500} triggerOnce={true}>
          <Title>Skills</Title>
        </Slide>

        <Slide direction='up' duration={600} triggerOnce={true}>
          <p className="mb-22">
            Durante minha carreira como desenvolvedora front-end, tive a
            oportunidade de trabalhar com diversas tecnologias que me permitiram
            criar interfaces funcionais. Algumas das tecnologias com as quais já
            trabalhei incluem:
          </p>
        </Slide>
      </div>
      <SkillsItem />
    </div >
  )
}

export default Skills 
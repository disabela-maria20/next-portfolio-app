/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { Title } from '../../atoms'
import projescts from '../../../../utils/json/projescts.json'
import { Slide, Zoom } from 'react-awesome-reveal'

const Projects: React.FC = (): JSX.Element => {
  const [select, setSelect] = useState<string>('professional')

  return (
    <>
      <div className="container m-auto px-15" id="trabalhos">
        <Slide direction='up' duration={500} triggerOnce={true}>
          <div className="flex flex-col items-center md:justify-between md:flex-row mb-26 md:mt-66 lg:mt-136">
            <Title>Trabalhos</Title>
            <select
              className="px-10 py-10 border border-gray-100 text-gray-800 rounded-md w-164 font-serif"
              defaultValue="professional"
              onChange={({ target }) => setSelect(target.value)}
            >
              <option value="professional">Profissional</option>
              <option value="study">Estudo</option>
            </select>
          </div>
        </Slide>

        <article className="grid grid-cols-1 grid-rows-6 md:grid-rows-none sm:grid-cols-2 lg:grid-cols-3 gap-26 md:gap-26 ">
          {projescts
            .sort((a, b) => a.id - b.id)
            .filter((e) => e.type === select)
            .map((data) => (
              <Zoom key={data.id} direction='up' duration={data.id * 100 + 50} triggerOnce={true}>
                <div className="relative z-20 block-project  h-full object-cover">
                  <a
                    href={`${data.link}`}
                    rel="noreferrer nofollow noopener"
                    target="_SEJ"
                  >
                    <>
                      <img
                        src={data.img}
                        alt={`Projeto ${data.name}`}
                        width="452"
                        height="265"
                        className="block-project-img relative -z-10 h-full object-cover"
                      />
                      <div className="absolute top-0 h-full w-full flex justify-center flex-col items-center">
                        <h3 className="text-white font-serif font-semibold text-15 lg:text-18">
                          {data.name}
                        </h3>
                        <img
                          src={data.technology.icon}
                          alt={`Projeto ${data.technology.name}`}
                          width="auto"
                          height="auto"
                          className="relative -z-10 object-cover w-22"
                        />
                      </div>
                    </>
                  </a>
                </div>
              </Zoom>

            ))}
        </article>
      </div>
    </>
  )
}

export default Projects

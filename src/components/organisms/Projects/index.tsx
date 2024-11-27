/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Title } from '../../atoms'
import projescts from '../../../../utils/json/projescts.json'

const Projects: React.FC = (): JSX.Element => {
  const [select, setSelect] = useState<string>('professional')

  return (
    <>
      <div className="container m-auto px-15" id="trabalhos">
        <>
          <div className="flex flex-col items-center md:justify-between md:flex-row mb-26 md:mt-66 lg:mt-136">
            <Title>Trabalhos</Title>
          </div>
        </>

        <article className="grid grid-cols-1 grid-rows-6 md:grid-rows-none sm:grid-cols-2 lg:grid-cols-3 gap-26 md:gap-26 ">
          {projescts
            .sort((a, b) => a.id - b.id)
            .map((data) => (
              <div className="relative z-20 block-project  h-full object-cover" key={data.id}>
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
                      className="block-project-img relative h-full object-cover"
                    />
                    <div className="absolute top-0 h-full w-full flex justify-center flex-col items-center">
                      <h3 className="text-white font-serif font-semibold text-15 lg:text-18">
                        {data.name}
                      </h3>
                      <img
                        src={data.technology.icon}
                        alt={`Projeto ${data.technology.name}`}
                        width="22"
                        height="22"
                        className="relative -z-10 object-cover w-22"
                      />
                    </div>
                  </>
                </a>
              </div>
            ))}
        </article>
      </div>
    </>
  )
}

export default Projects

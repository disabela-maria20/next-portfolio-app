/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { Title } from '../../atoms'
import { IProjectProps } from './type'
import { useQuery } from '@tanstack/react-query'

const getProject = async (): Promise<IProjectProps[]> => {
  const response = await fetch(`/api/projects/devjobs`)
  const data = await response.json()
  return data
}

const Projects: React.FC = (): JSX.Element => {
  const [select, setSelect] = useState<string>('professional')

  const { data, isLoading } = useQuery<IProjectProps[]>({
    queryKey: ['todos'],
    queryFn: getProject
  })

  return (
    <>
      <div className="container m-auto px-15" id="trabalhos">
        <div className="flex flex-col items-center md:justify-between md:flex-row mb-26 md:mt-66 lg:mt-136">
          <Title>Trabalhos</Title>
          <select
            className="px-10 py-10 border rounded-md w-164"
            defaultValue="professional"
            onChange={({ target }) => setSelect(target.value)}
          >
            <option value="professional">Profissional</option>
            <option value="study">Estudo</option>
          </select>
        </div>
        <article className="grid grid-cols-1 grid-rows-6 md:grid-rows-none sm:grid-cols-2 lg:grid-cols-3 gap-26 md:gap-26 ">
          {isLoading ? (
            <p>Carregando...</p>
          ) : (
            <>
              {data &&
                data
                  .filter((e) => e.type === select)
                  .map((data) => (
                    <div key={data.id} className="relative z-20 block-project">
                      <Link
                        href={`${data.link}`}
                        passHref
                        legacyBehavior
                        rel="noreferrer nofollow noopener"
                        target="_SEJ"
                      >
                        <>
                          <img
                            src={data.img}
                            alt={`Projeto ${data.name}`}
                            width="auto"
                            height="auto"
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
                      </Link>
                    </div>
                  ))}
            </>
          )}
        </article>
      </div>
    </>
  )
}

export default Projects

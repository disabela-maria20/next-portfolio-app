import { THome } from '@/components/templates'
import { NextSeo } from 'next-seo'
import React from 'react'

const Index = () => {
  return (<>
    <NextSeo
      nofollow={true}
      title="Portfólio | Isabela M. Ribeiro - Desenvolvedora Front-End"
      description="Olá! Sou uma profissional de front-end com formação em Análise e Desenvolvimento de Sistemas e 3 anos de experiência na área. Minha expertise está na programação reativa do React.js & Next.js, onde sempre busco utilizar os conceitos de SOLID, Mobile First, UX&UI e outros para melhorar a performance das aplicações e a experiência do usuário"
      canonical="https://isabelamribeiro.com.br/"
      themeColor='#000'
      openGraph={{
        url: 'https://isabelamribeiro.com.br/',
        title: 'Portfólio | Isabela M. Ribeiro - Desenvolvedora Front-End',
        description: 'Olá! Sou uma profissional de front-end com formação em Análise e Desenvolvimento de Sistemas e 3 anos de experiência na área. Minha expertise está na programação reativa do React.js & Next.js, onde sempre busco utilizar os conceitos de SOLID, Mobile First, UX&UI e outros para melhorar a performance das aplicações e a experiência do usuário',

        images: [
          {
            url: 'https://isabelamribeiro.com.br/img/openGraph-seo.webp',
            width: 1200,
            height: 630,
            alt: 'Desenvolvedora Front-end React.js, Next.js & Typescript'
          },
          {
            url: 'https://isabelamribeiro.com.br/img/img-link-seo.webp',
            width: 800,
            height: 600,
            alt: 'Desenvolvedora Front-end React.js, Next.js & Typescript'
          }
        ],
        site_name: 'Seu Site'
      }}

    />
    
    <THome />
  </>)
}

export default Index
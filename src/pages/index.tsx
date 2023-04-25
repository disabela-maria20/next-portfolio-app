import { THome } from '@/components/templates'
import { NextSeo } from 'next-seo'
import React from 'react'

const Index = () => {
  return (<>
    <NextSeo
      title="Desenvolvedora Front-end React.js, Next.js & Typescript | Isabela M. Ribeiro"
      description="Conheça a desenvolvedora front-end especializada em programação reativa com React.js e Next.js. Com experiência em SOLID, Mobile First e Atomic Design, já entregou produtos de alta qualidade no mercado."
      canonical="https://isabelamribeiro.com.br/"
      openGraph={{
        url: 'https://isabelamribeiro.com.br/',
        title: 'Desenvolvedora Front-end React.js, Next.js & Typescript | Isabela M. Ribeiro',
        description: 'Conheça a desenvolvedora front-end especializada em programação reativa com React.js e Next.js. Com experiência em SOLID, Mobile First e Atomic Design, já entregou produtos de alta qualidade no mercado.',
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
import { THome } from "@/components/templates"
import { NextSeo } from "next-seo"
import React from "react"

const Index = () => {
  return (
    <>
      <NextSeo
        title="Isabela M. Ribeiro | Desenvolvedora Front-End React & Next.js"
        description="Portfólio de Isabela M. Ribeiro, desenvolvedora front-end especializada em React, Next.js e TypeScript. Criação de interfaces modernas, performáticas e responsivas."
        canonical="https://isabelamribeiro.com.br/"
        noindex={false}
        nofollow={false}
        themeColor="#000"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://isabelamribeiro.com.br/",
          title:
            "Isabela M. Ribeiro | Desenvolvedora Front-End React & Next.js",
          description:
            "Conheça o portfólio de Isabela M. Ribeiro, desenvolvedora front-end com foco em React, Next.js, TypeScript, UX/UI e performance.",
          images: [
            {
              url: "https://isabelamribeiro.com.br/img/openGraph-seo.webp",
              width: 1200,
              height: 630,
              alt: "Portfólio de Isabela M. Ribeiro – Desenvolvedora Front-End React e Next.js",
            },
          ],
          site_name: "Isabela M. Ribeiro",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Desenvolvedora Front-End, React, Next.js, TypeScript, Portfólio Front-End, Desenvolvedor React Brasil, UX UI, JavaScript",
          },
          {
            name: "author",
            content: "Isabela M. Ribeiro",
          },
        ]}
      />

      <THome />
    </>
  )
}

export default Index

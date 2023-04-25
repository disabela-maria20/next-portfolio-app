/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <link rel="shortcut icon" type="image/x-icon" href="img/icone.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#18181b" />
      <meta name="keywords " content="Desenvolvedora Front-end, Desenvolvimento de Front-end, React.js, Desenvolvimento com React.js, Next.js, Desenvolvimento com Next.js, Typescript, Desenvolvimento com Typescript, SOLID, Programação reativa, Performance, Mobile First, Atomic Design, UI Design, UX Design, Desenvolvimento de UI, Controle de versão, Git, Gerenciamento de código-fonte, Wordpress, Desenvolvimento com Wordpress, HTML5, Desenvolvimento com HTML5, CSS3, Desenvolvimento com CSS3, Javascript, Desenvolvimento com Javascript, Jest, Testes automatizados, Redux, Desenvolvimento com Redux, SQL Server, Banco de dados SQL Server, Otimização de sites, Desempenho de sites, Desenvolvimento de layouts responsivos, Desenvolvimento de peças gráficas, Suporte técnico, Testes de usabilidade, Testes de qualidade, Reuniões de desenvolvimento, Ideias para melhorar a experiência do usuário, Qualidade de projetos, Mulher, Mulher dev, Mulher desenvolvedera, Mulher front-end" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script strategy="lazyOnload" src={`https://www.google.com/recaptcha/api.js?render=${process.env.KEY_RECAPTCHA}`} />
      </body>
    </Html>
  )
}

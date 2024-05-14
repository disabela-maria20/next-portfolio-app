import React from 'react'
import { Html5Original, Css3OriginalWordmark, JavascriptOriginal, TypescriptPlain, ReactOriginal, NextjsOriginal, TailwindcssPlain, SassOriginal, BootstrapOriginal, JestPlain, ReduxOriginal, MicrosoftsqlserverPlain } from 'devicons-react';

const icons = {
  Html5Original,
  Css3OriginalWordmark,
  JavascriptOriginal,
  TypescriptPlain,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssPlain,
  SassOriginal,
  BootstrapOriginal,
  JestPlain,
  ReduxOriginal,
  MicrosoftsqlserverPlain
};

const skills = [
  { id: 1, Icon: icons.Html5Original, title: 'HTML5' },
  { id: 2, Icon: icons.Css3OriginalWordmark, title: 'CSS3' },
  { id: 3, Icon: icons.JavascriptOriginal, title: 'Javascript' },
  { id: 4, Icon: icons.TypescriptPlain, title: 'Typescript' },
  { id: 5, Icon: icons.ReactOriginal, title: 'React & React Native' },
  { id: 6, Icon: icons.NextjsOriginal, title: 'Next.js' },
  { id: 7, Icon: icons.TailwindcssPlain, title: 'Tailwindcss' },
  { id: 8, Icon: icons.SassOriginal, title: 'Sass' },
  { id: 9, Icon: icons.BootstrapOriginal, title: 'Bootstrap' },
  { id: 10, Icon: icons.JestPlain, title: 'Jest' },
  { id: 11, Icon: icons.ReduxOriginal, title: 'Redux' },
  { id: 12, Icon: icons.MicrosoftsqlserverPlain, title: 'SQL Server' }
];

const SkillsItem = (): JSX.Element => {
  return (
    <section className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-31 sm:gap-55 py-31'>
      {skills.map(({ Icon, title, id }) => (
        <div className='shadow-gray-100 shadow py-26 rounded-sm' key={id}>
          <Icon className='icon-dev' />
          <p className='text-center text-13 font-bold mt-6'>{title}</p>
        </div>
      ))}
    </section>
  )
}

export default SkillsItem 
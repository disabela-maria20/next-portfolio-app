import React from 'react'
import { Html5Original, Css3OriginalWordmark, JavascriptOriginal, TypescriptPlain, ReactOriginal, NextjsOriginal, TailwindcssPlain, SassOriginal, BootstrapOriginal, JestPlain, ReduxOriginal, MicrosoftsqlserverPlain } from 'devicons-react';
import { SkillsProps } from './type';

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
  { Icon: icons.Html5Original, title: 'HTML5' },
  { Icon: icons.Css3OriginalWordmark, title: 'CSS3' },
  { Icon: icons.JavascriptOriginal, title: 'Javascript' },
  { Icon: icons.TypescriptPlain, title: 'Typescript' },
  { Icon: icons.ReactOriginal, title: 'React & React Native' },
  { Icon: icons.NextjsOriginal, title: 'Next.js' },
  { Icon: icons.TailwindcssPlain, title: 'Tailwindcss' },
  { Icon: icons.SassOriginal, title: 'Sass' },
  { Icon: icons.BootstrapOriginal, title: 'Bootstrap' },
  { Icon: icons.JestPlain, title: 'Jest' },
  { Icon: icons.ReduxOriginal, title: 'Redux' },
  { Icon: icons.MicrosoftsqlserverPlain, title: 'SQL Server' }
];

const SkillsItem = (): JSX.Element => {
  return (
    <section className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-55 py-31'>
      {skills.map(({ Icon, title }) => (
        <div key={title} className='shadow-gray-100 shadow py-26 rounded-md'>
          <Icon className='icon-dev' />
          <p className='text-center text-13 font-bold mt-6'>{title}</p>
        </div>
      ))}
    </section>
  )
}

export default SkillsItem 
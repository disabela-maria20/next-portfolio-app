import React from 'react'
import { Square, Menu } from '../../molecules'

const Header = (): JSX.Element => {
  return (
    <div className='bg-black'>
      <Menu />
      <Square />
    </div>
  )
}

export default Header 

import React, { useState } from 'react'
import { Logo, Burger, Nav } from '../../atoms'

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="h-79">
      <div className="container m-auto">
        <div className="md:flex md:justify-between md:items-center">
          <div className="flex justify-between p-13 items-center md:block">
            <Logo />
            <Burger open={open} setOpen={() => setOpen(!open)} />
          </div>
          <Nav open={open} />
        </div>
      </div>
    </header>
  )
}

export default Menu 
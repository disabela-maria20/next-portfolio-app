import React from 'react'
import { IBottonProps } from './type'

const Button = ({ children, styleType = '', ...props }: IBottonProps): JSX.Element => {
  return (
    <button {...props} className={styleType}>{children}</button>
  )
}

export default Button 

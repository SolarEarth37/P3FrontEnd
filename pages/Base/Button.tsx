import React from 'react'
import { NavButton } from '../../styles/Styled'
import { Link, Path } from 'react-router-dom'

interface ILink{
  buttonText: string,
  navlink: string
}

export default function Button({buttonText,navlink}: ILink) {

  return (
    <Link to={navlink} replace>
      <NavButton type="button">{buttonText}</NavButton>
    </Link>
  )
}

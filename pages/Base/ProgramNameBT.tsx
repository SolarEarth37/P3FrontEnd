import React from 'react'
import { NavButton } from '../../styles/Styled'
import { Link, Path } from 'react-router-dom'
import { LinkProps } from 'next/link'

export default function ProgramNameBT(buttonText: String, link: Partial<Path>) {

  return (
    <Link to={link} replace>
      <NavButton type="button">{buttonText}</NavButton>
    </Link>
  )
}

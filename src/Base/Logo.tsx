import React from 'react'
import { StyledLogo } from '../Styles/Styled'

export default function Logo(source: any) {
  let imgSrc = source.imageSource;
  return (
    <StyledLogo src={imgSrc} alt="Logo" />
  )
}

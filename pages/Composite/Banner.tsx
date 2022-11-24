import React from 'react'
import { GridDiv, ProgramName } from '../../styles/Styled'
import Button from '../Base/Button'
import Logo from '../Base/Logo'
import LogoType2 from '../Base/Logo2'

export default function Banner() {
  return (
    <GridDiv>
        <Button buttonText="ITPLEASEDONTSHOOTME" navlink="/"/>
        <Logo/>
        <ProgramName>ScanMat2</ProgramName>
        <LogoType2/>
        <Button buttonText="ITPLEASEDONTSHOOTME" navlink="/"/>
    </GridDiv>
  )
}

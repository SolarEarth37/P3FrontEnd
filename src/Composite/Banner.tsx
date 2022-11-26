import React from 'react'
import { GridDiv, ProgramName } from '../Styles/Styled'
import Button from '../Base/Button'
import Logo from '../Base/Logo'

export default function Banner() {
  return (
    <GridDiv>
      <Button buttonText="PLEASEDONTSHOOT" navlink="/" />
      <Logo source={"../-ironspear_hero-2022-hero.jpg/"} />
      <ProgramName>ScanMat2</ProgramName>
      <Logo source={"../ukr_fsvdk_mg_4676-20222-artikel.jpg/"} />
      <Button buttonText="PLEASEDONTSHOOT" navlink="/" />
    </GridDiv>
  )
}

import React from 'react'
import { GridDiv, ProgramName } from '../Styles/Styled'
import Button from '../Base/Button'
import Logo from '../Base/Logo'
import useDirectLocation from '../Hooks/useDirectLocation'

export default function Banner() {
  return (
    <GridDiv>
      <Button buttonText="ScanMat2" navlink={useDirectLocation()} />
      <Logo imageSource={"../-ironspear_hero-2022-hero.jpg"} />
      <ProgramName>ScanMat2</ProgramName>
      <Logo imageSource={"../-ukr_fsvdk__mg_4676-2022-artikel.jpg"} />
      <Button buttonText="ScanMat2" navlink={useDirectLocation()} />
    </GridDiv>
  )
}

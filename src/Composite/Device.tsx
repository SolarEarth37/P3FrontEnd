import React from 'react'
import { LoanGrid, LoanText } from '../Styles/Styled'

export interface DeviceData {
    Name?: string,
    Id?: number,

}

export default function User({Name, Id}: DeviceData) {
  return (
    <LoanGrid>
        <LoanText>{Name}</LoanText>
        <LoanText></LoanText>
        <LoanText>{Id}</LoanText>
    </LoanGrid>
  )
}

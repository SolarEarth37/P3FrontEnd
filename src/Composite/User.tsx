import React from 'react'
import { LoanGrid, LoanText } from '../Styles/Styled'

interface UserData {
    name?: string,
    phone?: number,
    email?: string

}

export default function User({name, phone}: UserData) {
  return (
    <LoanGrid>
        <LoanText>{name}</LoanText>
        <LoanText></LoanText>
        <LoanText>{phone}</LoanText>
    </LoanGrid>
  )
}

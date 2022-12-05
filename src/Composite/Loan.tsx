import React from 'react'
import { LoanGrid, LoanText } from '../Styles/Styled'

interface LoanData {
    name?: string,
    id?: number,
    dueDate?: Date,

}

export default function Loan(loan: LoanData) {
    return (
        <LoanGrid>
            <LoanText>{loan?.name}</LoanText>
            <LoanText>{loan?.id}</LoanText>
            <LoanText>{loan?.dueDate?.getDate()}. {new Intl.DateTimeFormat("en-US", { month: "long" }).format(loan?.dueDate)}</LoanText>
        </LoanGrid>
    )
}

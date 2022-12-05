import React from 'react'
import useCreateLoan from '../Hooks/useCreateLoan'
import { CreateLoanbutton } from '../Styles/Styled'

export default function CreateLoan() {
    return (
        <CreateLoanbutton type="button" onClick={useCreateLoan}>Create Loan</CreateLoanbutton>
    )
}

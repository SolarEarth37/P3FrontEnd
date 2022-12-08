import React from 'react'
import useCreateLoan from '../Hooks/useCreateLoan'
import { CreateLoanbutton } from '../Styles/Styled'

export default function CreateLoan() {
    function CreateLoan() {
        useCreateLoan({ User: "John", devices: [1, 2] })
    }

    return (
        <CreateLoanbutton type="button" onClick={CreateLoan}>Create Loan</CreateLoanbutton>
    )
}

import React from 'react'
import useCreateLoan from '../Hooks/useCreateLoan'
import { CreateLoanbutton } from '../Styles/Styled'

export default function CreateLoan(createLoan: any) {
    function DoCreateLoan() {
        //useCreateLoan({ User: "John", devices: [1, 2] })
        createLoan(true);
    }

    return (
        <CreateLoanbutton type="button" onClick={DoCreateLoan}>Create Loan</CreateLoanbutton>
    )
}

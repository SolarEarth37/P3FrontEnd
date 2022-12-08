import React from 'react'
import Banner from '../Composite/Banner'
import Loan from '../Composite/Loan'
import { GlobalBackground, MiddleWindowDiv } from '../Styles/Styled'
import OverDueLoanButton from '../Base/OverdueLoansButton'
import CreateLoan from '../Base/CreateLoan'
import useGetLoans from '../Hooks/useGetLoans'

interface LoanData {
    name?: string,
    dueDate?: Date,

}

interface LoansData {
    loans: [LoanData]
}


export default function LoanViewVM() {
    let dueDate: Date = new Date(2022, 1, 13)
    let name: string = "John Doe"

    let Loans: LoanData[] = [{ name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate },
    { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }];

    let AllLoans: LoansData = useGetLoans()

    return (
        <>
            <GlobalBackground />
            <Banner />
            <MiddleWindowDiv>
                {AllLoans?.loans.map((element, i) => (
                    <Loan dueDate={element?.dueDate} key={i} name={element?.name} id={i} />
                ))}
            </MiddleWindowDiv>
            <OverDueLoanButton />
            <CreateLoan />
        </>
    )
}

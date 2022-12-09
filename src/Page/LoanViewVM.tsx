import React, { useState } from 'react'
import Banner from '../Composite/Banner'
import Loan from '../Composite/Loan'
import { GlobalBackground, MiddleWindowDiv } from '../Styles/Styled'
import OverDueLoanButton from '../Base/OverdueLoansButton'
import CreateLoan from '../Base/CreateLoan'
import useGetLoans from '../Hooks/useGetLoans'
import LoanList from '../Base/LoanList'
import UserList from '../Base/UserList'

interface LoanData {
    name?: string,
    dueDate?: Date,

}

interface LoansData {
    loans: [LoanData]
}

export default function LoanViewVM() {
    const [createLoan, setCreateLoan] = useState<boolean>();
    //let dueDate: Date = new Date(2022, 1, 13)
    //let name: string = "John Doe"

    //let Loans: LoanData[] = [{ name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate },
    //{ name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }];

    return (
        <>
            <GlobalBackground />
            <Banner />
            <MiddleWindowDiv>
                {createLoan 
                ? <UserList/> 
                : <LoanList/>
                }
            </MiddleWindowDiv>
            <OverDueLoanButton />
            <CreateLoan createLoan={setCreateLoan}/>
        </>
    )
}

import React from 'react'
import Loan from '../Composite/Loan'
import useGetLoans from '../Hooks/useGetLoans'

interface LoanData {
    name?: string,
    dueDate?: Date,

}

interface LoansData {
    loans: [LoanData]
}

export default function LoanList() {

    let AllLoans: LoansData = useGetLoans()
  return (
    <>
        {AllLoans?.loans.map((element, i) => (
            <Loan dueDate={element?.dueDate} key={i} name={element?.name} id={i} />
        ))}
    </>
  )
}

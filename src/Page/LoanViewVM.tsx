import React from 'react'
import Banner from '../Composite/Banner'
import Loan from '../Composite/Loan'
import { GlobalBackground, MiddleWindowDiv } from '../Styles/Styled'

interface LoanData {
    name?: string,
    dueDate?: Date,

}

export default function LoanViewVM() {
    let dueDate: Date = new Date(2022, 1, 13)
    let name: string = "John Doe"

    let Loans: LoanData[] = [{ name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate },
    { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }, { name, dueDate }];

    return (
        <>
            <GlobalBackground />
            <Banner />
            <MiddleWindowDiv>
                {Loans?.map((element, i) => (
                    <Loan dueDate={element.dueDate} key={i} name={element.name} id={i} />
                ))}

            </MiddleWindowDiv>
        </>
    )
}

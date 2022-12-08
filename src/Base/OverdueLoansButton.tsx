import React from 'react'
import { useSendMail2 } from '../Hooks/useSendMail'
import { OverDueLoansButton } from '../Styles/Styled'

export default function OverdueLoanButton() {
    return (
        <>
            <OverDueLoansButton type="button" onClick={useSendMail2}>Get overdue loans</OverDueLoansButton>
        </>
    )
}
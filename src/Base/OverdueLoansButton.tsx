import React from 'react'
import useSendMail from '../Hooks/useSendMail'
import { OverDueLoansButton } from '../Styles/Styled'

export default function OverdueLoanButton() {
    return (
        <>
            <OverDueLoansButton type="button" onClick={useSendMail}>Get overdue loans</OverDueLoansButton>
        </>
    )
}

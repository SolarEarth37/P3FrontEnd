import React from 'react'
import useSendMail from '../Hooks/useSendMail'
import { OverDueLoansButton } from '../Styles/Styled'

export default function OverdueLoanButton() {
    function SendMail() {
        useSendMail({ name: "John" })
    }

    return (
        <>
            <OverDueLoansButton type="button" onClick={SendMail}>Get overdue loans</OverDueLoansButton>
        </>
    )
}
import React from 'react'
import { sendMail } from '../Hooks/useSendMail'
import { OverDueLoansButton } from '../Styles/Styled'

export default function OverdueLoanButton() {
    return (
        <>
            <OverDueLoansButton type="button" onClick={sendMail}>Get overdue loans</OverDueLoansButton>
        </>
    )
}
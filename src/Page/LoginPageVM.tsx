import React from 'react'
import CenteredButton from '../Base/CenteredButton'
import Banner from '../Composite/Banner'

export default function LoginPageVM() {
    return (
        <>
            <Banner />
            <CenteredButton buttonText={'Confirm'} navlink={'/menu'} />
        </>
    )
}

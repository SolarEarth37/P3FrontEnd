import React from 'react'
import CenteredButton from '../Base/CenteredButton'
import Banner from '../Composite/Banner'
import { GlobalBackground } from '../Styles/Styled'

export default function LoginPageVM() {
    return (
        <>
            <GlobalBackground />
            <Banner />
            <CenteredButton buttonText={'Confirm'} navlink={'/menu'} />
        </>
    )
}

import React from 'react'
import Banner from '../Composite/Banner'
import FrontPageMainLogin from '../Composite/FrontPageMainLogin'
import { Global, GlobalBackground } from '../Styles/Styled'

export default function FrontPageVM() {
    return (
        <>
            <GlobalBackground />
            <Global>
                <Banner />
                <FrontPageMainLogin />
            </Global>
        </>
    )
}

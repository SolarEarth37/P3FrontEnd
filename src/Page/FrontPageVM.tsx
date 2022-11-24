import React from 'react'
import Banner from '../Composite/Banner'
import { Global } from '../Styles/Styled'

export default function FrontPageVM() {
    return (
        <Global>
            <Banner></Banner>
            <div>FrontPageVM</div>
        </Global>
    )
}

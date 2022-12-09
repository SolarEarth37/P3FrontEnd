import React from 'react'
import DeviceList from '../Base/DeviceList'
import Banner from '../Composite/Banner'
import { GlobalBackground, MiddleWindowDiv } from '../Styles/Styled'

export default function DeviceManagementVM() {
    return (
        <>
            <GlobalBackground />
            <Banner />
            <MiddleWindowDiv>
                <DeviceList/>
            </MiddleWindowDiv>
        </>

    )
}

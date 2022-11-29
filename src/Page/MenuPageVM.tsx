import React from 'react'
import PictureButton from '../Base/PictureButton'
import Banner from '../Composite/Banner'
import { Global, GlobalBackground, MenuGrid } from '../Styles/Styled'

export default function MenuPageVM() {
    return (
        <>
            <GlobalBackground />
            <Global>
                <Banner />
                <MenuGrid>
                    <PictureButton buttonText={"../handshake.png"} navlink={'/loan'} />
                    <PictureButton buttonText={"../lager.jpg"} navlink={'/device'} />
                </MenuGrid>
            </Global>
        </>
    )
}

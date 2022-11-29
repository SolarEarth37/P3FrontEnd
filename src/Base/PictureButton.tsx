import React from 'react'
import { Link } from 'react-router-dom'
import { SizeImg } from '../Styles/Styled'

interface ILink {
    buttonText: string,
    navlink: string
}

export default function PictureButton({ buttonText, navlink }: ILink) {
    let imgSrc = buttonText

    return (
        <Link to={navlink}>
            <SizeImg src={imgSrc} alt={"Handshake"} />
        </Link>
    )
}

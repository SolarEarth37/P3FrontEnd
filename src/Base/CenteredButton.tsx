import React from 'react'
import { CenterButton } from '../Styles/Styled'
import { Link } from "react-router-dom"

interface ILink {
    buttonText: string,
    navlink: string
}

export default function CenteredButton({ buttonText, navlink }: ILink) {

    return (
        <Link to={navlink} replace>
            <CenterButton type="button">{buttonText}</CenterButton>
        </Link>
    )
}

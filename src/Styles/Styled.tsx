import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalBackground = createGlobalStyle`
    body {
        background-color: purple;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-position: center;
    }
`

const GlobalButtonStyle = styled.button`
    cursor: pointer;
    border: none;
    text-shadow: 0 2px 1px rgba(28, 28, 28, 0.55);
`

export const NavButton = styled(GlobalButtonStyle)`
    border: 1px solid black;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    text-align: center;
    font-size: 2em;
    background-color: green;
    width: 20vw;

    &:hover {
        color: #001f3f;
        background-color: greenyellow;
    }
`

export const GridDiv = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    height: 20vh;
    border: 4px solid black;
    margin: auto;
    margin-top: 0px;

`

export const ProgramName = styled.h2`
    text-align: center;
    font-size: 2em;
    background-color: transparent;
    text-shadow: 0 2px 1px rgba(28, 28, 28, 0.55);
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: default;

`

export const Global = styled.div`
    overflow: hidden;
`

export const CenterButton = styled(GlobalButtonStyle)`
    border: 1px solid black;
    white-space: nowrap;
    overflow: hidden;
    width: 15vw;
    text-align: center;
    font-size: 2.5em;
    background-color: green;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        color: #001f3f;
        background-color: greenyellow;
    }
`

export const StyledLogo = styled.img`
    max-width:100%;
    height:98%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
`
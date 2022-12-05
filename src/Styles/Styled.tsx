import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";

export const GlobalBackground = createGlobalStyle`
    body {
        background-color: #ADC178;
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
    background-color: #A98467;
    width: 100%;

    &:hover {
        color: #001f3f;
        background-color: #778255;
    }
`

export const GridDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    border: 4px solid black;
    margin-bottom: 10px;
    margin-top: 0px;
    background-color: #F0EAD2;

`

export const ProgramName = styled.h2`
    text-align: center;
    font-size: 2em;
    background-color: transparent;
    text-shadow: 0 2px 1px rgba(28, 28, 28, 0.55);
    position: relative;
    cursor: default;
    margin: auto;
    white-space: nowrap;

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
    height:100%;
    width:100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
`

export const MenuGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
    height: 80vh;
    margin: auto;
    gap: 1em;
        
`

export const SizeImg = styled.img`
   height: 100%;
   width: 100%;
`

export const MiddleWindowDiv = styled.div`
    margin-top: 5em;
    background-color: aliceblue;
    height: 70%;
    width: 40%;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    overflow-y: scroll;

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar {
        width: 1em;
    }
`

export const LoanGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    height: 10%;
    border: 2px solid black;
    margin-bottom: 0px;
    margin-top: auto;
    width: 99.5%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

export const LoanText = styled.h2`
    text-align: center;
    font-size: 2em;
    background-color: transparent;
    text-shadow: 0 2px 1px rgba(28, 28, 28, 0.55);
    position: relative;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: default;
    margin-top: 0px;
    margin-bottom: 0px;
    white-space: nowrap;

`
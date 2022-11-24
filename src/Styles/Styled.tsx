import styled from 'styled-components'

export const NavButton = styled.button`
    cursor: pointer;
    border: 1px solid black;
    white-space: nowrap;
    overflow: hidden;
    width: 15vw;
    height: 100%;
    text-align: center;
    font-size: 2.5em;
    background-color: green;
    width: 20vw;

    &:hover {
        color: #001f3f;
        background-color: greenyellow;
    }
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
    text-align: center;
    width: 100vw;
    height: 10vh;

`

export const ProgramName = styled.h2`
    text-align: center;
    font-size: 2.5em;
    background-color: transparent;
    width: 20vw;

`

export const Logo1 = styled.div`
    background-image: url(../public/favicon.ico);
`

export const Logo2 = styled.div`
    background-image: url(../public/favicon.ico);
`

export const Global = styled.div`
    overflow: hidden;
`
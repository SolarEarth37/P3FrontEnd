import styled from 'styled-components'

export const NavButton = styled.button`
    cursor: pointer;
    border: none;
    white-space: nowrap;
    overflow: hidden;
    width: 19vw;

    &:hover {
        color: #001f3f;
        background-color: #fff;
    }
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
    text-align: center;
    width: 100vw;

`

export const ProgramName = styled.h2`
    text-align: center;
    font-size: 1em;
    background-color: transparent;
    width: 20vw;

`

export const Logo1 = styled.div`
    width: 20vw;
    background-image: url(../public/favicon.ico);
`

export const Logo2 = styled.div`
    width: 20vw;
    background-image: url(../public/favicon.ico);
`
import styled from 'styled-components';

export const HeaderContainer = styled.header`

`

export const Container = styled.div`
    position: absolute;

    max-width: 1200px;
    width: 100%;
    margin: 4rem auto 0;

    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;

    z-index: 10;

    @media screen and (max-width: 1280px) {
        padding: 0 2rem;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Mobile = styled.div`
    position: absolute;

    max-width: 1200px;
    width: 100%;
    margin: 2rem auto 0;
    padding: 0 2rem;

    left: 0;
    right: 0;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    z-index: 10;

    @media screen and (max-width: 800px) {
        display: block;
    }

    @media screen and (min-width: 801px) {
        display: none;
    }
`

export const NavIcons = styled.nav`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        height: auto;
        width: 20.34px;

        cursor: pointer;

        transition: filter .2s;

        &:hover {
            filter: brightness(1.15);
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const InputWrapper = styled.div`
    input {
        height: 3rem;
        width: 19rem;
        padding-left: 1rem;
        border-radius: 10px;
        border: none;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
`

export const Logo = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    cursor: pointer;

    img {
        height: auto;
        width: 41.6px;
    }

    h1 {
        color: white;
        font-size: 1.675rem;
        font-weight: 500;
    }

    @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
    }
`
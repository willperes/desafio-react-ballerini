import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
`

export const AddButtonContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 8rem;
    display: flex;
    justify-content: flex-end;

    button {
        color: white;
        background: #27AE60;
        padding: 1rem 2rem;

        transition: filter .2s;

        &:hover {
            filter: brightness(.8);
        }
    }

    @media screen and (max-width: 1280px) {
        padding: 8rem 2rem 0;
    }

    @media screen and (max-width: 800px) {
        justify-content: center;
        padding-top: 10rem;
    }
`

export const DevsContainer = styled.section`
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;

    .dev-card-prev, .dev-card-next {
        height: auto;
        width: 70px;
        filter: invert(54%) sepia(5%) saturate(22%) hue-rotate(315deg) brightness(100%) contrast(87%);
        border: 3px solid #8b8b8b;
        border-radius: 100%;
        cursor: pointer;

        transition: filter .2s;

        &:hover {
            filter: invert(76%) sepia(1%) saturate(0%) hue-rotate(51deg) brightness(92%) contrast(91%);
        }
    }

    @media screen and (max-width: 1450px) {
        max-width: 950px;
    }

    @media screen and (max-width: 950px) {
        max-width: 525px;
    }

    @media screen and (max-width: 800px) {
        max-width: 525px;
        margin-top: 2.5rem;

        .dev-card-prev, .dev-card-next {
            margin: 0 .75rem;
            width: 50px;
        }
    }

    @media screen and (max-width: 450px) {
        padding-bottom: 2rem;
    }
`

export const Carousel = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    gap: 150px;

    &::-webkit-scrollbar {
        display: none;
    }

    @media screen and (max-width: 1450px) {
        max-width: 750px;
    }

    @media screen and (max-width: 950px) {
        max-width: 300px;
    }

    @media screen and (max-width: 450px) {
        max-width: 225px;
    }

    @media screen and (max-width: 375px) {
        max-width: calc(60vw);
    }
`

export const NoDevs = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    padding: 0 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        color: white;
        text-align: center;
        font-size: 2rem;
    }

    h2 {
        color: #A9A9A9;
        text-align: center;
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    @media screen and (max-width: 475px) {
        h1 {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1.25rem;
        }
    }
`
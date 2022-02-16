import styled from "styled-components";

export const HeroContainer = styled.main`
    display: flex;
`

export const Wrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
`

export const Content = styled.div`
    h1 {
        color: #D2D2D2;
        font-weight: 700;
        font-size: 3.2rem;
    }

    p {
        color: #A9A9A9;
        font-weight: 400;
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    button {
        position: relative;

        color: white;
        background: #27AE60;
        font-size: 1.6rem;

        padding: .75rem 4rem 1rem;
        margin-top: 4rem;

        transition: filter .2s;

        &:after {
            position: absolute;
            content: '______';
            color: #27AE60;

            left: 0;
            right: 0;
            bottom: -15px;
        }

        &:hover {
            filter: brightness(1.15);
        }
    }
`

export const ImageWrapper = styled.div`
    img {
        height: auto;
        width: 45rem;
    }
`
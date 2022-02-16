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

    .dev-card-prev {
        height: auto;
        width: 70px;
        filter: invert(54%) sepia(5%) saturate(22%) hue-rotate(315deg) brightness(100%) contrast(87%);
        border: 3px solid #8b8b8b;
        border-radius: 100%;
        cursor: pointer;
    }

    .dev-card-next {
        height: auto;
        width: 70px;
        filter: invert(54%) sepia(5%) saturate(22%) hue-rotate(315deg) brightness(100%) contrast(87%);
        border: 3px solid #8b8b8b;
        border-radius: 100%;
        cursor: pointer;
    }

    .swiper {
        max-width: 1200px;
        margin: 0 auto;
        cursor: grab;

        .swiper-wrapper {
            display: flex;

            .swiper-slide {
                display: flex;
                justify-content: center;
                min-width: 300px;

                &:first-child:nth-last-child(2),
                &:first-child:nth-last-child(2) ~ &:last-child {
                    margin-right: 10rem;
                }
            }
        }
    }
`

export const NoDevs = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: center;

    h1 {
        font-size: 2rem;
        color: white;
    }

    @media (max-width: 1280px) {
        padding: 0 2rem;
    }
`
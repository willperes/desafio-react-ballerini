import styled from "styled-components";

export const Container = styled.div`
    max-width: 300px;
    margin: 0 auto;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

export const DevCardContent = styled.div`
    height: 400px;
    width: 300px;

    background: #3C3C3C;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        .dev-card-img-wrapper {
            position: relative;

            img {
                position: relative;

                height: 175px;
                width: 175px;

                object-fit: cover;
                border-radius: 100%;
                border: 3px solid #27AE60;
            }

            &:after {
                position: absolute;
                content: '_______________';
                color: #27AE60;
                font-weight: bold;
                left: 1.75rem;
                bottom: -20px;
            }
        }
    }

    .dev-card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;

        background: #3C3C3C;

        h1 {
            color: white;
            font-size: 1.6rem;
            font-weight: 500;
        }

        p {
            color: white;
            font-size: 1rem;
        }
    }

    footer {
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-top: 1.5rem;
        
        svg {
            height: auto;
            width: 25px;
            color: white;
        }

        button {
            color: white;
            font-weight: normal;
            font-size: 1.2rem;
            padding: .75rem 1.5rem;
            background: #27AE60;
                transition: filter .2s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`

export const DevCardButtons = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;

    margin-top: 2rem;

    button {
        color: black;
        font-weight: 500;
        font-size: 1.2rem;
        padding: .75rem 2rem;
        transition: filter .2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    .dev-card-button-edit {
        background: #DBB801;
    }

    .dev-card-button-delete {
        background: #F42626;
    }
`
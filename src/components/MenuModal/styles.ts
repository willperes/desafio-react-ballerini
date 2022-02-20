import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100vw;
    background: #343333;

    .menu-modal-close {
        position: absolute;
        top: .5rem;
        left: .5rem;

        svg {
            height: auto;
            width: 30px;
            color: #27AE60;
        }
    }

    .menu-modal-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;

            color: #27AE60;
            list-style: none;

            li {
                display: flex;
                gap: .5rem;

                svg {
                    height: auto;
                    width: 25px;
                }

                a {
                    display: flex;
                    font-size: 1.5rem;
                    font-weight: 700;

                    gap: .5rem;
                }

                p {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                }

                & + li {
                    margin-top: 1rem;
                }
            }
        }
    }

    @media screen and (min-width: 801px) {
        display: none;
    }
`
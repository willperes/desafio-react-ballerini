import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .add-modal-box {
        display: flex;
        flex-direction: column;
        align-items: center;

        background: #343333;
        padding: 2rem;

        .add-modal-title {
            display: flex;
            flex-direction: column;
            align-items: center;

            svg {
                color: #27AE60;
                height: auto;
                width: 30px;
            }

            h1 {
                font-size: 2.4rem;
                font-weight: 500;
                color: white;
                text-align: center;
            }
        }

        form {
            display: flex;
            flex-direction: column;

            span {
                display: flex;
                flex-direction: column;

                label {
                    display: inline-block;
                    color: white;
                    font-size: 1.5rem;
                    font-weight: normal;

                    margin-top: 1rem;
                    margin-bottom: .5rem;
                }

                input {
                    width: 20rem;
                    height: 2rem;
                    padding-left: 1rem;
                    border: none;
                    border-radius: 10px;
                }

                p {
                    color: #C31E1E;
                }
            }

            .add-dev-modal-buttons {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin-top: 2rem;

                button {
                    padding: .75rem 2rem;
                    border: none;
                    font-size: 1.2rem;
                    font-weight: 500;
                    border-radius: 30rem;
                    background: white;

                    &[type="submit"] {
                        background: #DBB801;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 475px) {
        .add-modal-box {
            h1 {
                font-size: 2rem;
            }

            form {
                span {
                    label {
                        font-size: 1.25rem;
                    }
                    
                    input {
                        width: 90vw;
                    }
                }

                .add-dev-modal-buttons {
                    button {
                        padding: .5rem 1.5rem;
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }
`
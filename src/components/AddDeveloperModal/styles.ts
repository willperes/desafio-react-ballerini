import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem 0;
    width: 31rem;
    background: #343333;

    h1 {
        font-size: 2.4rem;
        font-weight: 500;
        color: white;
    }

    form {
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
`

export const Buttons = styled.div`
    display: flex;
    gap: 4.25rem;
    margin-top: 3rem;

    button {
        color: black;
        font-size: 1.25rem;
        font-weight: 500;

        padding: .5rem 1.25rem;
    }

    .add-dev-modal-cancel {
        background: #FFFFFF;
    }

    .add-dev-modal-add {
        background: #27AE60;
    }
`
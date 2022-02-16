import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem 0;
    width: 25rem;
    background: #343333;

    h1 {
        font-size: 2rem;
        font-weight: 500;
        color: white;
        text-align: center;
        margin-bottom: 1rem;
    }

    p {
        color: white;
        filter: brightness(.95);
        font-size: 1.4rem;
        margin: 0 2rem;
        text-align: center;
        margin-bottom: 1rem;
    }

    .delete-dev-modal-buttons {
        display: flex;
        gap: 1rem;

        button {
            border: none;
            border-radius: 30rem;
            padding: .5rem 1.5rem;
            font-weight: 500;
            font-size: 1.2rem;

            transition: filter .2s;

            &:hover {
                filter: brightness(.8);
            }
        }

        .delete-dev-modal-button-delete {
            background: #C31E1E;
        }
    }
`
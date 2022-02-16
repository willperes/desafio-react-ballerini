import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Maven Pro', sans-serif;
    }

    html {
        font-size: 93.75%;
    }

    body {
        position: relative;
        background-color: #1D1D1D;
    }

    body, input, textarea, select, button {
        font: 400 1rem 'Maven Pro', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1500;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 500ms ease-in-out;
    }
`
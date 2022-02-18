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

    .MuiModal-root {
        display: flex;

        justify-content: center;
        align-items: center;
    }

    .add-dev-modal {
        z-index: 1;
        max-height: 100%;
        overflow: scroll;
        overflow-y: auto;
        overflow-x: hidden;
    }

    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: #27ae60 #1D1D1D;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 15px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #27ae60;
        border-radius: 10px;
        border: 3px solid #1D1D1D;
  }
`
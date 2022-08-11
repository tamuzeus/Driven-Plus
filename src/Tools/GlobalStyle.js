import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *:root{
        font-family: 'Roboto', sans-serif
    }

    button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    font-weight: 700;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    }

    input {
        box-shadow: none;
        border: transparent;
        border-radius: 8px;
        height: 52px;
        padding-left: 10px;
    }

    body{
        background-color: black;
        color: white;
    }

    img{
        width: 100%;
        height: 100%;
    }
`

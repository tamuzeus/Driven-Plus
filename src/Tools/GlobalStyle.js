import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        font-family: 'Roboto', sans-serif;

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
    font-family: 'Roboto', sans-serif;
}

    input {
        box-shadow: none;
        border: transparent;
        font-family: 'Roboto', sans-serif;
    }

    body{
        background-color: black;
        color: white;
    }

    h1, p, h2, h3, h4{
        font-family: 'Roboto', sans-serif;
    }
`

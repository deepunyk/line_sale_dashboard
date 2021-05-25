import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box ;
        -moz-box-sizing: border-box; 
        font-family: 'Rubik', sans-serif;
    }

    body{
        margin: 0;
    }

`;

export default GlobalStyle;
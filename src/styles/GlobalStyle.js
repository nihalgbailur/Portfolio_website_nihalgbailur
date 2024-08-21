import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  /* Smooth scrolling effect */
  html {
    scroll-behavior: smooth;
  }

  /* Add a slight parallax effect */
  #about {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
`;

export default GlobalStyle;
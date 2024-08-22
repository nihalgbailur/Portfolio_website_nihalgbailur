// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000; /* Black background */
    color: #fff; /* Default text color */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }

  #root {
    width: 100%;
  }

  section {
    width: 100%;
    background-color: #000; /* Ensures all sections have black background */
  }
`;

export default GlobalStyle;
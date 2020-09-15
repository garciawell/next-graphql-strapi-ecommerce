import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/poppins-v12-latin-300.eot');
  src: local('Poppins Light'), local('Poppins-Light'),
       url('/fonts/poppins-v12-latin-300.woff2') format('woff2'), 

}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v12-latin-regular.eot');
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('/fonts/poppins-v12-latin-regular.woff2') format('woff2'), 

}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/poppins-v12-latin-600.eot'); 
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
       url('/fonts/poppins-v12-latin-600.woff2') format('woff2'),
}

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;

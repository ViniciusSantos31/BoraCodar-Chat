import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
  }
  
  body {
    background: #1a1924;
    color: #fff;
  }

  :root {
    width: 100vw;
    height: 100vh;

    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const App = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

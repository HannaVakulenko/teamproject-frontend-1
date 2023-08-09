import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.4;
    color: #333;
    background-color: #fff;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

#nprogress .bar {
background: #13151A;
}
`;

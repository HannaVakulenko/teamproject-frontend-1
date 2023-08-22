import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import InterRegular from '../assets/fonts/inter/Inter-Regular.ttf';
import InterMedium from '../assets/fonts/inter/Inter-Medium.ttf';
import InterBold from '../assets/fonts/inter/Inter-Bold.ttf';

import InterSemiBold from '../assets/fonts/inter/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../assets/fonts/inter/Inter-SemiBold-Italic.ttf';

import PoppinsRegular from '../assets/fonts/poppins/Poppins-Regular.ttf';
import PoppinsMedium from '../assets/fonts/poppins/Poppins-Regular.ttf';

import CoolveticaRegular from '../assets/fonts/coolvetica/Coolvetica-Regular.otf';
import CoolveticaRegularItalic from '../assets/fonts/coolvetica/Coolvetica-Regular-Italic.otf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterBold';
        src: local('InterBold'),
        url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBoldItalic';
        src: local('InterSemiBoldItalic'),
        url(${InterSemiBoldItalic}) format('truetype');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsMedium';
        src: local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }


    @font-face {
        font-family: 'CoolveticaRegular';
        src: local('CoolveticaRegular'),
        url(${CoolveticaRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'CoolveticaRegularItalic';
        src: local('CoolveticaRegularItalic'),
        url(${CoolveticaRegularItalic}) format('opentype');
        font-weight: 400;
        font-style: italic;
    }


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
    background-color: ${({ theme }) => theme.mainBGColor};
    color: ${({ theme }) => theme.mainTextColor};
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
background-color: ${({ theme }) => theme.mainTextColor};

}

.react-datepicker {
  border: none !important;
  background-color: transparent !important;
}

.css-3bmhjh-MuiPaper-root-MuiPopover-paper {
  background-color: transparent !important;
}

`;

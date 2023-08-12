// src/components/MainLayout/ThemeToggler/ThemeToggler.js

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'styles/theme';
import { GlobalStyle } from 'styles/GlobalStyles';
import icon from 'assets/icons/symbol-defs.svg';
import { ButtonThemeToggler } from './ThemeToggler.styled';

function ThemeToggler() {
  const [theme, setTheme] = useState('light');

  const switchTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ButtonThemeToggler onClick={switchTheme}>
        <svg width="22" height="22">
          <use
            href={icon + (theme === 'light' ? '#icon-sun' : '#icon-moon')}
          ></use>
        </svg>
      </ButtonThemeToggler>
    </ThemeProvider>
  );
}

export default ThemeToggler;

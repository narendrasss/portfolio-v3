import React from 'react';
import { theme } from './src/theme';
import GlobalStyle from './src/global';
import { ThemeProvider } from 'styled-components';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
);

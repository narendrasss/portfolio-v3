import { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${themeGet('fonts.sans')};
    font-size: 2rem;
    line-height: ${themeGet('lineHeights.body', '1.618')};
    color: ${themeGet('colors.black')};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
  }

  h1,
  h2,
  h3 {
    font-family: ${themeGet('fonts.sans')};
    font-weight: ${themeGet('fontWeights.semibold')};
  }

  h1 {
    line-height: ${themeGet('lineHeights.title')};
  }

  code {
    font-family: ${themeGet('fonts.mono')};
  }

  img,
  video {
    width: 100%;
    height: auto;
  }

  html {
    font-size: 8px;
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
    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  }

  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

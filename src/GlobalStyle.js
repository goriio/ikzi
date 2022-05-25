import { createGlobalStyle } from 'styled-components';

// https://www.svgbackgrounds.com/
import EndlessConstellation from './assets/endless-constellation.svg';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-default: #440044;
    --color-text-default: #151515;
    --color-fg-default: #ffffff;
    --color-fg-wash: #f2f2f2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
      background: url(${EndlessConstellation});
      color: var(--color-text-default);
  }
`;

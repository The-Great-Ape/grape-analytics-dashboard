import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'Gilroy Light';
    src: url('/fonts/Gilroy-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy Medium';
    src: url('/fonts/Gilroy-Medium.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Gilroy Bold';
    src: url('/fonts/Gilroy-ExtraBold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background: radial-gradient(
      88.33% 113.42% at 71.34% 83.89%,
      #4e8ebf 0%,
      #5671be 32.29%,
      #713585 58.85%,
      #36325d 85.5%,
      #251a3a 98.96%
    );
    background-repeat: no-repeat;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default globalStyles;

import { css } from 'styled-components';

export default {
  breakpoints: {
    mobile: {
      number: 375,
      px: '375px',
    },
    desktop: {
      number: 1239,
      px: '1239px',
    },
  },

  fontFamily: ['Dilemma, Helvetica, Arial, sans-serif'],

  colors: {
    white: '#ffffff',
    green: '#21312B',
    brown: '#BFA66B',
    yellow: '#F0EBC9',
    black: '#000000',
    select: '#C7C8C9',


    feedback: {
      error: '#CA0000',
      success: '#41CA00',
      warning: '#ffc107',
      disabled: '#172E29',
    },
  },
  typography: {
    body: css`
      font-family: 'Nexa';
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.3px;
      line-height: 20px;
    `,
    big: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 58px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 54px;
      text-transform: uppercase;
    `,
    navButton: css`
      font-family: 'Nexa';
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.3px;
    `,
    span: css`
      font-family: 'Nexa';
      font-size: 16px;
      font-weight: 700;
      font-style: italic;
    `,
    nav: css`
      font-family: 'Nexa';
      font-size: 15px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 30px;
    `,
    button: css`
      font-family: 'Nexa';
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 0.3px;
      line-height: 30px;
    `,
    map: css`
      font-family: 'Nexa';
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;
    `,
    legend: css`
      font-family: 'Nexa';
      font-size: 11px;
      font-weight: 400;
      line-height: 22px;
    `,
    legendCorte: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 10px;
      font-weight: 300;
      line-height: 12px;
    `,
    span30: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 30px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 35px;
    `,
    carouselTechnicalTitle: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 17px;
      font-weight: 300;
      line-height: 23px;
    `,
    span22: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 22px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 27px;
    `,
    span15: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 15px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 30px;
    `,
    h1Desktop: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 25px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 36px;
    `,
    h2Desktop: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 18px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 30px;
    `,
    h2Mobile: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 36px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 37.5px;
    `,
    h3Desktop: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 24px;
      font-weight: 300;
      line-height: 34px;
    `,
    Footer: css`
      font-family: 'Nexa';
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
    `,
    h2Idealization: css`
      font-family: 'Dilemma-SerifLight-2';
      font-size: 56px;
      font-weight: 300;
      line-height: 62px;
    `,
    textIdealization: css`
      font-family: 'Nexa';
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};

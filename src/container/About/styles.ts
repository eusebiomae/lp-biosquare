import styled from "styled-components";
import theme from "../../theme";


export const Section = styled.section`
  padding: 60px 0 0;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 40px 0 0;
  }

  .text-empreendimento {
    p {
      width: 340px;

      :nth-child(2) {
        width: 310px;
      }
    }
  }
`;

export const BoxCards = styled.div`
  background-color: ${theme.colors.green};
  border-radius: 20px;
  margin-top: 112px;
  padding-inline: 70px;
  position: relative;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 0;
  }

  & > img {
    :nth-child(1) {
      left: 46%;
      position: absolute;
      top: -68px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        left: 38%;
      }
    }
  }

  .selos-box {
    gap: 92px 0;

    .selo-gold {
      background-color: #fff;
      clip-path: circle(50% at 50% 50%);
      margin-top: -100px;
      padding: 20px;
      width: 133px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        margin-left: 22%;
      }
    }

    .selo-fitwell {
      background-color: #fff;
      clip-path: circle(50% at 50% 50%);
      margin-top: -100px;
      padding: 54px 20px;
      width: 133px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        margin-left: 22%;
      }
    }

    .selo-loop {
      background-color: #fff;
      clip-path: circle(50% at 50% 50%);
      margin-top: -100px;
      padding: 33px 36px;
      width: 132px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        margin-left: 22%;
      }
    }

    .selo-esg {
      background-color: #fff;
      clip-path: circle(50% at 50% 50%);
      margin-top: -100px;
      padding: 55px 34px;
      width: 133px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        margin-left: 22%;
      }
    }

    button {
      align-items: center;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 10px;
      color: #fff;
      display: flex;
      gap: 8px;
      height: 52px;
      justify-content: center;
      margin-top: 14px;
      width: 370px;
      ${theme.typography.button}

      img {
        margin-top: -5px;
        width: 15px;
      }

      @media (max-width:  ${theme.breakpoints.desktop.px}) {
        width: 100%;
      }
    }
  }
`;

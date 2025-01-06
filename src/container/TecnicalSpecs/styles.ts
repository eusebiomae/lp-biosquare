import styled from "styled-components";
import { imgRoof, imgSpecs, imgSpecsMob } from "../../assets/specs";
import theme from "../../theme";
import { QLaje, QSpecs } from "../../assets/icons";

export const Section = styled.section`
  padding: 48px 0 0;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 24px 0 0;
  }
`;

export const ContentBannerSpecs = styled.div`
  background-image: url(${imgSpecs});
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 468px;
  margin-top: 36px;
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-image: url(${imgSpecsMob});
    background-size: cover;
    height: 225px;
  }

  & > div {
    :nth-child(1) {
      p {
        @media (max-width: ${theme.breakpoints.desktop.px}) {
          border-radius: 20px;
          height: 100%;
          line-height: 25px;
          padding: 50px 12px;
        }
      }
    }
  }

  .beforeQ {
    background-image: url(${QSpecs});
    background-repeat: no-repeat;
    bottom: -21px;
    content: '';
    left: 43%;
    height: 135px;
    position: absolute;
    width: 153px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      background-size: contain;
      bottom: -28px;
      height: 85px;
      left: 66%;
      width: 76px;
    }
  }

  p {
    border-radius: 10px;
  }

  img {
    margin-right: 45px;
    margin-bottom: -255px;
    rotate: 180deg;
    width: 256px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-top: 12px;
      margin-left: 17px;
      margin-bottom: -30px;
      width: 100%;
    }
  }
`;

export const ContentLajeSpecs = styled.div`
  background-color: ${theme.colors.brown};
  border-radius: 20px;
  margin-top: 70px;
  padding: 40px 0 0;
  position: relative;

  button {
    font-family: 'Dilemma-SerifLight-2';
    margin-inline: 0;
  }

  & > div {
    :nth-child(2) {
      ul {
        :nth-child(2) {
          @media (max-width: ${theme.breakpoints.desktop.px}) {
            margin-left: 15px;
            width: 270px !important;
          }
        }
      }
    }
    :nth-child(4) {
      background-image: url(${imgRoof});
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 0 0 20px 20px;
      height: 590px;
      margin-top: 30px;
      padding: 30px 0;
      width: 100%;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        background-position: center center;
        height: 206px;
      }
    }

    :nth-child(5) {
      background-image: url(${QLaje});
      bottom: 286px;
      content: '';
      height: 243px;
      position: absolute;
      right: 36px;
      width: 263px;

      @media (max-width:  ${theme.breakpoints.desktop.px}) {
        background-size: contain;
        bottom: 127px;
        height: 42px;
        right: 12px;
        width: 45px;
      }
    }
  }

  hr {
    background-color: ${theme.colors.brown};
    bottom: 20px;
    height: 544px;
    left: 20px;
    position: absolute;
    width: 4px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }
`;

export const ContentCorteEsquematico = styled.div`
  margin-top: 36px;
  position: relative;

  & > div {
    :nth-child(2) {
      p {
        :nth-child(3) {
          align-items: flex-end;
          display: flex;

          img {
            height: 124px;
            margin-inline: 50px;
            width: 25px;
          }
        }
      }
    }
  }
`;

export const ContentImplantacao = styled.div`
  margin-top: 48px;
  position: relative;

  .img-implantacao {
    border-radius: 20px;
    height: 516px;
    width: 100%;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ButtonContent = styled.div`
`;

import styled from "styled-components";
import theme from "../../theme";
import { Swiper } from "swiper/react";
import { Container as ContainerGrid } from '../../components';
import { imgLocalizacao, imgLocalizacaoMob, linhasMapa } from "../../assets/localization";


export const Section = styled.section`
  padding: 48px 0 22px;
  position: relative;
  `;

export const ContainerButton = styled(ContainerGrid)`
  @media (min-width: ${theme.breakpoints.desktop.px}) {
    button {
      margin-inline: 0;
    }
  }
  `;

export const ContentBanner = styled.div`
  background-image: url(${imgLocalizacao});
  background-repeat: no-repeat;
  height: 545px;
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-image: url(${imgLocalizacaoMob});
    background-size: cover;
    border-radius: 20px;
    height: 359px;
  }

  &::before {
    background: linear-gradient(180deg, rgba(33, 49, 43, 0.00) 30.73%, #21312B 100%);
    border-radius: 20px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  img {
    margin-right: 80px;
    transform: rotate(180deg);
    width: 497px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-top: 12px;
      margin-left: 48px;
      width: 248px;
    }
  }
`;

export const ContentHeader = styled.div`
  margin-inline: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: initial;
    justify-content: space-between;
    margin-bottom: 15px;
    margin-inline: 100px;
  }
`;

export const ContainerMap = styled.div`
  position: relative;
`;


export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 24px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
  }

  button {
    margin-inline: 0;
    font-family: 'Dilemma-SerifLight-2';
  }
`;

export const BoxSwiper = styled.div`
  width: 325px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: 16px;
    padding-top: 0;
    width: 100%;
  }
`;

export const SwiperReact = styled(Swiper)`
  padding-bottom: 100px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    order: 0;
    padding-bottom: 40px;
    width: 100%;
  }

  .swiper-slide {
    img {
      opacity: 0.1;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 1px solid;
    bottom: 25px;
    color: ${theme.colors.green};
    height: 41px;
    left: 0;
    top: auto;
    width: 41px;

    &::after {
      font-size: 10px;
      font-weight: 600;
      transition: 0.2s ease-in-out;
    }
  }

  .swiper-button-next {
    left: 50px;

    &:hover {
      &::after {
        transform: translateX(4px);
      }
    }
  }

  .swiper-button-prev {
    &:hover {
      &::after {
        transform: translateX(-4px);
      }
    }
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 0;

    .swiper-pagination-bullet {
      border-radius: 0;
      background-color: transparent;
      border: 1px solid ${theme.colors.brown};
      height: 6px;
      opacity: 1;
      width: 6px;

      &.swiper-pagination-bullet-active {
        border: 1px solid ${theme.colors.brown};
        background-color: ${theme.colors.brown};
        position: relative;
      }
    }
  }
`;

export const Card = styled.div`
  & > header {
    align-items: center;
    border-top: 1px solid ${theme.colors.brown};
    border-bottom: 1px solid ${theme.colors.brown};
    display: flex;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 8px 2px;
  }

  & > div {
    max-width: 555px;

    strong {
      ${theme.typography.button}
    }
  }

  & + & {
    margin-top: 40px;
  }
`;

import styled from 'styled-components';
import {
  Swiper,
  SwiperSlide as SwiperSlideReact,
} from 'swiper/react';
import theme from '../../theme';

export const Section = styled.section`
  position: relative;

  .linhas-plantas-title {
    position: absolute;
    top: -100px;
    right: -80px;
    transform: rotate(180deg);

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }
`;

export const SwiperReact = styled(Swiper)`

  .swiper-slide {
    margin-top: 0;

    @media (min-width: ${theme.breakpoints.desktop.px}) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 1px solid;
    border-radius: 10px;
    color: ${theme.colors.green};
    height: 41px;
    width: 41px;

    &::before {
      animation: pulse 2s infinite;
      background-color: rgba(0, 0, 0, 0); /* Cor do efeito pulsar */
      border-radius: 10px;
      box-shadow: 0 0 0 1px black, 0 0 0 rgba(0, 0, 0, 0); /* Ajuste os valores conforme necessário para controlar o tamanho e a cor do efeito pulsar */
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 1px black, 0 0 0 rgba(0, 0, 0, 0);
      }
      50% {
        box-shadow: 0 0 15px 1px black, 0 0 15px rgba(0, 0, 0, 0.9); /* Ajuste os valores conforme necessário para controlar o tamanho e a cor do efeito pulsar */
      }
      100% {
        box-shadow: 0 0 0 1px black, 0 0 0 rgba(0, 0, 0, 0);
      }
    }

    &::after {
      font-size: 17px;
      font-weight: 700;
      transition: 0.2s ease-in-out;
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }

  .swiper-button-next {
    right: 100px;
    top: 95%;

    &:hover {
      &::before {
        animation: none;
      }
      &::after {
        transform: translateX(4px);
      }
    }
  }

  .swiper-button-prev {
    left: 83%;
    top: 95%;

    &:hover {
      &::before {
        animation: none;
      }
      &::after {
        transform: translateX(-4px);
      }
    }
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

export const Slides = styled.div`
  position: relative;

  & > img {
    display: block;
    margin-inline: auto;
    object-fit: cover;
    width: 300px;

    @media (min-width: ${theme.breakpoints.desktop.px}) {
      width: 600px;
    }
  }

  & > span {
    background-color: ${theme.colors.white};
    bottom: 0;
    color: ${theme.colors.green};
    max-width: 332px;
    padding: 8px;
    position: absolute;
    right: 0;
    text-align: right;
    ${theme.typography.legend}
  }
`;

export const BoxIntro = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  & > div {
    padding-bottom: 24px;
    position: relative;
    width: 100%;

    & > h6 {
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      margin-bottom: 24px;
      width: 447px;

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        width: 100%;
      }
    }

    &::after {
      background-color: ${theme.colors.yellow};
      bottom: 24px;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  & > img {
    align-self: flex-end;
    height: 102px;
    min-width: 369px;
    object-fit: cover;
    position: relative;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;

    & > div {
      max-width: 100%;
      padding-bottom: 22px;

      &::after {
        bottom: 0;
      }
    }

    & > img {
      align-self: flex-end;
      height: 72px;
      margin-top: -6px;
      min-width: auto;
      width: 90%;
    }
  }
`;

export const SwiperSlide = styled(SwiperSlideReact)`
  border: 1px solid ${theme.colors.brown};
  border-radius: 20px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 24px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    justify-content: center;
    margin-left: 0;
  }

  .textos-plants {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    margin-top: 26px;
    width: 490px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      flex-wrap: initial;
      flex-direction: column;
      margin-top: 0;
    }

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      width: 200px;
    }
  }
`;

export const BtnMaximize = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.green};
  display: flex;
  font-size: 20px;
  font-weight: 400;
  gap: 8px;
  height: 44px;
  justify-content: center;
  line-height: 26px;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 44px;
  z-index: 1;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    right: 100px;
  }
`;

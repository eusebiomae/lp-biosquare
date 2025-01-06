import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import theme from '../../theme';

export const SwiperReact = styled(Swiper)`
  padding-bottom: 50px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    overflow: visible;
    padding-bottom: 0;
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 1px solid;
    background-color: ${theme.colors.white};
    border-radius: 10px;
    color: white;
    height: 41px;
    width: 41px;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0); /* Cor do efeito pulsar */
      box-shadow: 0 0 0 1px white, 0 0 0 rgba(0, 0, 0, 0); /* Ajuste os valores conforme necessário para controlar o tamanho e a cor do efeito pulsar */
      animation: pulse 2s infinite;
      border-radius: 10px;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 1px white, 0 0 0 rgba(0, 0, 0, 0);
      }
      50% {
        box-shadow: 0 0 41px 1px white, 0 0 41px rgba(255, 255, 255, 0.9); /* Ajuste os valores conforme necessário para controlar o tamanho e a cor do efeito pulsar */
      }
      100% {
        box-shadow: 0 0 0 1px white, 0 0 0 rgba(0, 0, 0, 0);
      }
    }

    &::after {
      color: black;
      font-size: 11px;
      font-weight: 700;
      transition: 0.2s ease-in-out;
    }

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }

  .swiper-button-next {
    right: 100px;
    top: 88%;

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
    top: 88%;

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

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    width: 1110px;
    height: 447px;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }

  & > span {
    bottom: -45px;
    color: ${theme.colors.green};
    font-size: 24px;
    font-family: 'Dilemma-SerifLight-2';
    font-weight: 300;
    left: 0;
    line-height: 34px;
    padding: 8px;
    position: absolute;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      bottom: 10px;
      color: ${theme.colors.white};
      line-height: 12px;
      font-size: 12px;
      left: 0;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    height: auto;
    min-height: initial;
  }
`;

export const BtnMaximize = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
  color: ${theme.colors.black};
  display: flex;
  gap: 10px;
  justify-content: center;
  position: absolute;
  padding: 10px;
  right: 8px;
  top: 8px;
  width: 44px;
  height: 44px;

  svg {
    font-size: 20px;
  }
`;

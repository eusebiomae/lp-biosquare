import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';
import { DetailIdealization } from '../../assets/footer';
import { Swiper, SwiperSlide as SwiperSlideReact } from "swiper/react";

export const Container = styled(ContainerGrid)`
  padding: 40px 20px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    padding: 40px 0;
  }

  & > header {
    margin-bottom: 35px;
    padding-bottom: 34px;
    position: relative;

    &::before {
      background-image: url(${DetailIdealization});
      background-size: cover;
      bottom: 0;
      content: '';
      height: 14px;
      left: 0;
      position: absolute;
      width: 150px;
    }
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
    border-bottom: none;

    > div {
      @media (min-width: ${theme.breakpoints.desktop.px}) {
        margin-right: 30px;

        &:last-child {
          margin-right: none;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    border: 1px solid;
    border-radius: 10px;
    bottom: 25px;
    color: ${theme.colors.green};
    height: 41px;
    right: 50px;
    top: auto;
    width: 41px;

    &::after {
      font-size: 10px;
      font-weight: 600;
      transition: 0.2s ease-in-out;
    }
  }

  .swiper-button-next {
    right: 0;

    &:hover {
      &::after {
        transform: translateX(4px);
      }
    }
  }

  .swiper-button-prev {
    left: auto;
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
      border: 1px solid ${theme.colors.black};
      border-radius: 50%;
      margin: 0 2px;
      height: 6px;
      opacity: 1;
      width: 6px;

      &.swiper-pagination-bullet-active {
        border: 1px solid ${theme.colors.black};
        background-color: ${theme.colors.black};
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

export const SwiperSlide = styled(SwiperSlideReact)`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    border-bottom: 1px solid ${theme.colors.brown};
    padding-bottom: 24px;
  }
`;

export const Slides = styled.div`
  position: relative;

  & > img {
    display: block;
    margin-inline: auto;
    object-fit: cover;
    width: 94%;
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

export const Producers = styled.div`
  border-top: 1px solid ${theme.colors.brown};
  border-bottom: 1px solid ${theme.colors.brown};
  padding-block: 24px;
  margin-top: 24px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-block: 45px;
  }

  > div {

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      &:first-child{
        p {
          margin-top: 30px;
        }
      }
      &:nth-child(2) {
        p {
          margin-top: 12px;
        }
      }
    }

    img {
      margin: 0 auto;
    }
    &:first-child {
      img {
        width: 145px;
      }
    }
    &:nth-child(2) {
      img {
        max-height: 67px;
      }
    }
    &:last-child {
      img {
        max-height: 102px;
      }
    }
  }

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    justify-content: space-around;
  }
`;

export const ProducersItem = styled.div`
  @media (max-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    align-items: center;
    display: grid;
    grid-template-rows: 102px auto;
    text-align: center;
    width: 260px;
  }
`;

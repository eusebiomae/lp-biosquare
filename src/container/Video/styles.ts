import styled from 'styled-components';
import theme from '../../theme';
import { capa } from '../../assets/video';

export const BoxVideo = styled.div`
  display: grid;
  height: 580px;
  margin: 0 auto;
  margin-top: 37px;
  max-width: 1170px;
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    height: 35vh;
    margin-top: 60px;
    width: 100%;
  }

  & > img {
    height: 174px;
    left: 25px;
    object-fit: cover;
    position: absolute;
    top: -149px;
    width: 193px;
    z-index: 1;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 80px;
      left: initial;
      object-fit: none;
      right: 15px;
      top: -67px;
      width: 82px;
    }
  }

  & > Iframe {
    height: 580px;
    z-index: 1;
    width: 100%;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 210px;
    }
  }

  video {
    position: relative;
    width: 100%;
  }

  button {
    align-items: center;
    background-image: url(${capa});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
    color: ${theme.colors.white};
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 210px;
    }

    &::after {
      content: '';
      background: rgba(0, 0, 0, 0.39);
      border-radius: 20px;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    & > div {
      align-items: center;
      background-color: transparent;
      display: flex;
      justify-content: center;
      padding: 12px;
      transition: 0.2s ease-in-out;
      z-index: 1;

      svg {
        font-size: 61px;
      }

      &:hover {
        border: 1px solid #fff;
        transform: rotate(45deg);

        svg {
          font-size: 51px;
          transform: rotate(-45deg);
          transition: all 0.2s ease-in-out;
          translate: 10px -8px 0px;
        }
      }
    }
  }
`;

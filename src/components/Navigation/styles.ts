import styled, { css } from 'styled-components';
import theme from '../../theme';
import { iconChat, iconChatWhite } from '../../assets/icons';
import { iconBrazil, iconUsa } from '../../assets/header';

interface ActionProps {
  isOpen: boolean;
}

interface ButtonNavProps {
  isContact: boolean;
}

export const BoxContainer = styled.div`
  padding: 30px 0 16px;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 10;

  & > div {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 16px 0 0;

    img {
      margin-top: 4px;
    }
  }
`;

export const BoxBrand = styled.div<{ isVisible: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    position: fixed;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    top: 45px;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    & > img {
      max-width: 200px;
    }
  }
`;

export const ButtonMobile = styled.button<ActionProps>`
  align-items: center;
  background-color: ${theme.colors.green};
  color: ${theme.colors.yellow};
  display: flex;
  gap: 8px;
  margin-top: 0;
  padding: 14px 15px;

  & > div {
    height: 10px;
    position: relative;
    width: 14px;
    margin-top: -3px;

    span {
      background-color: ${theme.colors.yellow};
      display: block;
      height: 2px;
      position: absolute;
      width: 14px;

      &:nth-child(1) {
        top: -2px;
      }

      &:nth-child(2) {
        bottom: 0;
        top: 4px;
      }

      &:nth-child(3) {
        bottom: -2px;
      }
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.green};
      margin-top: -5px;

      div {
        height: 16px;
        width: 14px;
        margin-top: -3px;

        span {
          background-color: ${theme.colors.green};

          &:nth-child(1) {
            top: 50%;
            transform: translate(-50%);
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            display: none;
          }

          &:nth-child(3) {
            top: 50%;
            transform: translate(-50%);
            transform: rotate(-45deg);
          }
        }
      }
    `}
`;

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const ContentNavBar = styled.div<{ isVisible: boolean }>`

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    position: fixed;
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    display: flex;
    gap: 30px;
    align-items: center;
    right: calc(50% - 580px);
    top: 45px;
  }
`;

export const ButtonSelect = styled.div`
  width: 85px;
  height: 35px;
  background-color: transparent;
  border-radius: 10px;
  /* border: 1px solid ${theme.colors.white}; */
  display: flex;
  justify-content: space-evenly;

  img {
    &:hover {
      transform: scale(1.14);
      transition: all .2s ease-in-out;
    }
  }

    /* select {
      width: 100%;
      height: 100%;
      background-color: transparent;
      color: ${theme.colors.white};
      padding: 5px;

      option {
        color: ${theme.colors.black};
      }
    } */
`;

export const ButtonNav = styled.button<ButtonNavProps>`
  background-color: transparent;
  color: ${theme.colors.white};
  position: relative;
  ${theme.typography.nav}

  &::before {
    background-color: ${theme.colors.brown};
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: transform 300ms ease;
    transform-origin: right;
    transform: scaleX(0);
  }

  &:hover {
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    color: ${theme.colors.yellow};
    text-align: right;

    &::before{
      display: none;
    }
  }

  ${({ isContact }) =>
    isContact &&
    css`
      align-items: center;
      background-color: ${theme.colors.brown};
      border: 1px solid ${theme.colors.brown};
      border-radius: 10px;
      color: ${theme.colors.white};
      display: flex;
      gap: 8px;
      transition: 0.2s ease-in-out;
      padding: 8px 16px 5px 16px;

      &:hover {
        background-color: ${theme.colors.green};
        border: 1px solid ${theme.colors.brown};
        color: ${theme.colors.white};

        &::before,
        &::after {
          display: none;
        }
      }

      @media (max-width: ${theme.breakpoints.desktop.px}) {
        align-items: center;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.white};
        border-radius: 0;
        color: ${theme.colors.green};
        display: flex;
        height: 56px;
        justify-content: center;
        width: 190px;
        ${theme.typography.body}

        &::before,
        &::after {
          display: none;
        }
      }
    `}
`;

export const Aside = styled.div<ActionProps>`
  background-color: ${theme.colors.green};
  height: 100vh;
  padding: 16px 20px;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? 0 : '-100vw')};
  transition: 0.5s ease-in-out;
  top: 0;
  width: 100%;
  z-index: 10;

  & > header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 68px;
    margin-top: 19px;

    img {
      width: 200px;
      margin: 0;
    }
  }
`;

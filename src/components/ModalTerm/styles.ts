import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  align-items: center;
  background-color: ${theme.colors.black}80;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Content = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  height: auto;
  max-width: 1000px;
  overflow: hidden;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    height: auto;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${theme.colors.select};
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding: 15px;
  }

  a {
    background-color: transparent;
    font-size: 16px;

    svg {
      color: ${theme.colors.green};
    }
  }

  p {

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      font-size: 25px;
    }
  }
`;

export const Main = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  height: 55vh;
  overflow-y: auto;
  padding: 24px;
  padding-bottom: 16px;

  strong {
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  ul {
    list-style: disc;
    list-style-position: inside;
  }
`;

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid ${theme.colors.select};
  display: flex;
  justify-content: flex-end;
  padding: 24px;

  a {
    background-color: transparent;
    ${theme.typography.body};
    cursor: pointer;

    :hover{
      text-decoration: underline;
    }
  }
`;

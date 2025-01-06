import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const BoxExpo = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 75px;
`;

export const Content = styled.div`
  align-items: center;
  background-color: ${theme.colors.white};
  display: flex;
  flex: 1;
  justify-content: center;
  overflow-y: auto;
  padding: 24px 100px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px 20px;

    & > img {
      margin-bottom: 22px;
      width: 200px;
    }
  }

  & > form {
    max-width: 570px;
    width: 100%;
  }
`;

export const ButtonClose = styled.button`
  align-items: center;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.green};
  color: ${theme.colors.green};
  display: flex;
  font-size: 28px;
  height: 54px;
  justify-content: center;
  position: fixed;
  right: 16px;
  top: 16px;
  transition: 0.2s ease-in-out;
  width: 54px;
  z-index: 100;

  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.white};
  }
`;

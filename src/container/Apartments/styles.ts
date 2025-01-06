import styled from 'styled-components';
import theme from '../../theme';
import { linhasHorizontais, linhasVerticais } from '../../assets/decorado';
import { QSwiper } from '../../assets/icons';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  &::before {
    background-image: url(${QSwiper});
    background-repeat: no-repeat;
    content: '';
    height: 157px;
    position: absolute;
    right: -90px;
    bottom: 30px;
    width: 174px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }
`;

export const BoxQ = styled.div`
  position: relative;

  &::before {
    background-image: url(${QSwiper});
    background-repeat: no-repeat;
    content: '';
    height: 157px;
    position: absolute;
    right: -90px;
    bottom: -22px;
    width: 174px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      display: none;
    }
  }
`;

export const TabContents = styled.div`
  position: relative;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    padding: 64px 20px 0;
  }
`;

export const TabContent = styled.div`
  padding: 20px 0;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    padding: 20px 0 50px;
  }
`;

export const TabHeader = styled.div`
  display: flex;
  gap: 15px;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  align-items: center;
  background-color: ${(props) => (props.isActive ? '#BFA66B' : 'transparent')};
  border: 1px solid #BFA66B;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? '#fff' : '#BFA66B')};
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  width: 173px;

  ${theme.typography.nav}

  &:hover {
    background-color: #BFA66B;
    color: #fff;
  }
`;

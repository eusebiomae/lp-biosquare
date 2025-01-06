import styled from 'styled-components';
import { Container as ContainerGrid } from '../../components';
import theme from '../../theme/theme';
import { QBody, QVazado, QVazadoMob, rMapa, rMapaMob, vetorMapa } from '../../assets/icons';

export const Container = styled(ContainerGrid)`
  padding: 40px 20px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    padding: 40px 0;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-inline: auto;
  max-width: 860px;
  align-items: center;

  & > h2 {
    margin-bottom: 16px;
    padding: 6px 12px;
    width: max-content;
    text-transform: capitalize;
  }

  & > p {
    margin-bottom: 32px;
  }
`;

export const BoxForm = styled.div`
  margin-inline: auto;
  max-width: 570px;

  button {
    border-radius: 20px;
    border: 1px solid ${theme.colors.yellow};
  }
`;

export const CBRE = styled.div`
  border-bottom: 1px solid ${theme.colors.brown};
  border-top: 1px solid ${theme.colors.brown};
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 50px;
  padding-block: 40px;
`;

export const ContentMapa = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    background-image: url(${vetorMapa});
    background-repeat: no-repeat;
    height: 50px;
    position: absolute;
    top: 135px;
    right: 0;
    width: 168px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      bottom: -65px;
      top: initial;
    }
  }

  &::after {
    content: '';
    background-image: url(${QBody});
    background-repeat: no-repeat;
    height: 89px;
    position: absolute;
    top: 84px;
    right: 155px;
    width: 90px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      background-image: url(${QBody});
      height: 80px;
      right: 20px;
      top: 104px;
      width: 89px;
    }
  }

  img {
    width: 100%;
  }

  button {
    margin-top: -100px;
    position: relative;
  }
`;

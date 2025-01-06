import styled from 'styled-components';
import theme from '../../theme';
import { Container } from '../Grid';
import { DetailIdealization, LogoIdealization } from '../../assets/footer';

export const Section = styled.div`
  overflow: hidden;
  padding-top: 64px;
`;

export const Content = styled(Container)`
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

export const TextContent = styled.div`
  padding-bottom: 123px;
  border-bottom: 1px solid ${theme.colors.brown};

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 32px;
  }
`;

export const TextContentTitle = styled.div`
  max-width: 426px;
  text-align: right;
  margin-bottom: 25px;

  h2 {
    color: ${theme.colors.brown};

    &:first-child {
      margin-right: 100%;
    }
  }
`;

export const Paragraphs = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-75%, -50%);
    width: 141px;
    height: 127px;
    background-image: url(${LogoIdealization});
    background-size: cover;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      top: 60%;
      left: 50%;
      transform: translate(-50%, -75%);
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    gap: 163px;
  }
`;

export const FirstParagraphs = styled.div`
  max-width: 570px;

  p {
    &:first-child {
      max-width: 34em;
    }
    &:last-child {
      @media (min-width: ${theme.breakpoints.desktop.px}) {
        width: 36.5em;
      }
    }
  }
`;

export const SecondParagraphs = styled.div`
  max-width: 406px;
`;

export const RealizationAndIncorporation = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 56px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-direction: column;
    gap: 45px;
  }
`;

export const BrandsRealizationAndIncorporation = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    justify-content: center;
    gap: 30px;
  }
`;

export const FirstRealization = styled.div``;
export const SecondRealization = styled.div``;

export const BoxDescription = styled.div`

  h2 {
    @media (min-width: ${theme.breakpoints.desktop.px}) {
      width: 90em;
    }
  }

  div {
    padding-block: 40px;
    border-top: 1px solid ${theme.colors.brown};

    @media (min-width: ${theme.breakpoints.desktop.px}) {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }

  img {
    @media (max-width: ${theme.breakpoints.desktop.px}) {
      margin-top: 40px;
    }
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-bottom: 40px;
  }
`;

export const BoxImages = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  margin-bottom: 42px;

  img {
    object-fit: cover;
  }
`;

import styled from 'styled-components';
import { primeiradobra, primeiradobracomQ } from '../../assets/hero';
import theme from '../../theme';
import { QHero } from '../../assets/icons';

export const Section = styled.section`
  background-image: url(${primeiradobracomQ});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 100vh;
  margin-top: 0;
  position: relative;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    background-image: url(${primeiradobracomQ});
    height: 270vh;
  }

  &::before {
    background: linear-gradient(0deg,#FFF 3%,rgba(255,255,255,0) 100%);
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 155px;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      height: 49px;
    }
  }
`;

export const ButtonSelectHero = styled.div`
  background-color: transparent;
  border-radius: 10px;
  display: flex;
  height: 35px;
  justify-content: space-evenly;
  position: absolute;
  right: 15px;
  top: 80px;
  width: 85px;
`;

export const SectionTexts = styled.div`
  margin: 16px 0 0;
  position: relative;

  &::before {
    background: linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.0) 100%);
    content: '';
    height: 40px;
    left: 0;
    position: absolute;
    top: -55px;
    width: 100%;
  }
`;

export const ContentDesk = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    gap: 100px;
  }

  .skyscraper {
    border-left: 1px solid ${theme.colors.brown};
    padding: 0 0 0 18px;
    position: fixed;
    right: calc(50% - 580px);
    top: 151px;
  }

  p {
    width: 235px;
  }

  .textos-inspirado {
    p {
      width: 303px;
    }
  }
`;

export const Content = styled.div`
  top: 0;
  position: relative;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
    gap: 100px;
  }

  .skyscraper {
    border-left: 1px solid ${theme.colors.brown};
    padding: 0 0 0 18px;
    position: absolute;
    right: 0;
    top: 151px;
  }

  p {
    width: 235px;
  }

  .textos-inspirado {
    p {
      width: 303px;
    }
  }
`;

export const Img = styled.img`
  margin-top: 35px;
  width: 100px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    bottom: 50px;
    left: 25px;
    position: absolute;
  }
`;

export const ButtonHero = styled.button`
  background-color: ${theme.colors.yellow};
  border-radius: 10px;
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.green};
  font-family: 'Dilemma-SansLight';
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  margin-top: 45px;
  padding: 15px 0;
  text-align: center;
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    width: 288px;
  }

  :hover {
    background-color: ${theme.colors.green};
    border: 1px solid ${theme.colors.brown};
    color: ${theme.colors.white};
    transition: 0.2s ease-in-out;
  }
`;

export const BrDesk = styled.br `
  display: none;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    display: flex;
  }
`;

export const BrMob = styled.br `
  display: flex;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    display: none;
  }
`;

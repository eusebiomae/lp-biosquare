// components/BackToTopButton.tsx
import React, { useState, useEffect, useContext } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../Languages/Languages';

const BackToTopButtonWrapper = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 10px;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 100;
  width: 144px;
  height: 44px;
  border-radius: 100px;
  border: 1px solid #9c9c9c;
  background-color: #fff;
  color: #9c9c9c;
  font-weight: 600;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  :hover {
    background-color: #9c9c9c;
    border: 1px solid #9c9c9c;
    color: #fff;
    transition: all 0.3s;
  }
`;

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const languageContext  = useContext(LanguageContext);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Porcentagem da tela para tornar o botão visível
    const scrollThreshold = window.innerHeight * 2.6;

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  return (
    <BackToTopButtonWrapper isVisible={isVisible} onClick={scrollToTop}>
      { translations.Intro.btnbacktotop } <FiChevronUp/>
    </BackToTopButtonWrapper>
  );
};

export default BackToTopButton;

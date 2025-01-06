import React, { useContext, useEffect, useState } from 'react';
import {
  iconBrazil,
  iconUsa,
  logo,
  logoAside,
} from '../../assets/header';
import { goNextSection, useWindowSize } from '../../providers';
import { Container } from '../Grid';
import Text from '../Text';
import {
  Aside,
  BoxBrand,
  BoxContainer,
  ButtonMobile,
  ButtonNav,
  ButtonSelect,
  ContentNavBar,
  Nav,
} from './styles';
import Modal from '../Modal/Modal';
import { ExpoModal } from '../../container';
import { ContactForm } from '../../forms';
import { iconChat, iconChatWhite } from '../../assets/icons';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../Languages/Languages';

const Navigation: React.FC = () => {
  const languageContext  = useContext(LanguageContext);
  const [openMenu, setOpenMenu] = useState(false);
  const { isDesktop } = useWindowSize();
  const [openModal, setOpenModal] = useState(false);
  const [language, setLanguage] = useState('');

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  useEffect(() => {
    document.body.style.overflow = openMenu
      ? 'hidden'
      : 'visible';
  }, [openMenu]);

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Defina a porcentagem da tela para tornar o botão invisível
    const scrollThreshold = window.innerHeight * 1.5;

    setIsVisible(scrollY < scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Brand = (
    <BoxBrand data-aos="fade-down" data-aos-duration="1500" isVisible={isVisible}>
      <img
        loading="lazy"
        src={logo}
        alt="Logo Biosquare Pinheiros"
      />
    </BoxBrand>
  );

  const dataMenu = [
    {
      key: 'biosquare',
      label: [ translations.Header.labelBio ],
    },
    {
      key: 'sustainability',
      label: [ translations.Header.labelSust ],
    },
    {
      key: 'localization',
      label: [ translations.Header.labelLocal ],
    },
    {
      key: 'specs',
      label: [ translations.Header.labelEspecs ],
    },
    {
      key: 'idealization',
      label: [ translations.Header.labelConcept ],
    },
    {
      key: 'contact',
      label: [ translations.Header.labelContact ],
    },
  ];

  const handleOpenModal = () => {
    setOpenMenu(false);
    setOpenModal(true);
  };

  const handleClick = (key: string) => {
    setOpenMenu(false);
    goNextSection(key);
  };

  // const handleLanguage = (e: any) => {
  //   languageContext?.setLanguage(e.target.value);
  // }

  const handleLanguage = (languageCode: string) => {
    languageContext?.setLanguage(languageCode);
  };

  const Navigation = (
    <>
    <ContentNavBar isVisible={isVisible}>
      <Nav data-aos="fade-down" data-aos-duration="1500">
        {dataMenu.map(menu => (
          menu.key === 'contact' ? (
            <ButtonNav
              key={menu.key}
              isContact={menu.key === 'contact'}
              onClick={() => handleOpenModal()}
            >
              {menu.label}


              {menu.key === 'contact' && (
                <img
                loading="lazy"
                src={isDesktop ? iconChatWhite : iconChat}
                alt="Icon Chat"
                />
              )}
            </ButtonNav>

            ) : (
              <ButtonNav
              key={menu.key}
              isContact={menu.key === 'contact'}
              onClick={() => handleClick(menu.key)}
            >
              {menu.label}

              {menu.key === 'contact' && (
                <img
                  loading="lazy"
                  src={isDesktop ? iconChatWhite : iconChat}
                  alt="Icon Chat"
                />
                )}
            </ButtonNav>
          )

        ))}
      </Nav>

      {isDesktop &&
        <ButtonSelect
          data-aos="fade-left"
          data-aos-duration="1500"
          style={{
            cursor:"pointer",
          }}
        >
          <img onClick={() => handleLanguage('pt-BR')} src={iconBrazil} alt="Brasil Flag" />
          <img onClick={() => handleLanguage('en-US')} src={iconUsa} alt="USA Flag" />

        </ButtonSelect>
      }

    </ContentNavBar>

    </>
  );

  const ToggleMenu = (
    <ButtonMobile
      isOpen={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <Text variant="navButton">menu</Text>

      <div>
        <span />
        <span />
        <span />
      </div>
    </ButtonMobile>
  );

  const Mobile = (
    <BoxContainer>
      <Container>
        {Brand}

        {ToggleMenu}

        <Aside isOpen={openMenu}>
          <header>
            <img
              loading="lazy"
              src={logoAside}
              alt="Logo Biosquare Pinheiros"
            />

            {ToggleMenu}
          </header>

          {Navigation}
        </Aside>
      </Container>
    </BoxContainer>
  );

  const Desktop = (
    <BoxContainer>
      <Container>
        {Brand}

        {Navigation}
      </Container>
    </BoxContainer>
  );

  return (
    <>
    {isDesktop ? Desktop : Mobile}

    <Modal
      open={openModal}
      expo={<ExpoModal title="Seja um corretor parceiro" />}
      onClose={() => setOpenModal(false)}
    >
      <ContactForm />
    </Modal>
  </>
  );
};

export default Navigation;

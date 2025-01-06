import React, { useContext, useEffect, useState } from 'react';
import { Box, Container, Modal, Text } from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import ExpoModal from '../ExpoModal/ExpoModal';
import {
  BrDesk,
  BrMob,
  ButtonHero,
  ButtonSelectHero,
  Content,
  ContentDesk,
  Img,
  Section,
  SectionTexts,
} from './styles';
import { seloLoopBranco } from '../../assets/hero';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { iconBrazil, iconUsa } from '../../assets/header';

const Hero: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const languageContext  = useContext(LanguageContext);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const handleLanguage = (languageCode: string) => {
    languageContext?.setLanguage(languageCode);
  };

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

  return (
    <>
      <Section data-header="hero">

        {!isDesktop &&

          <ButtonSelectHero
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img onClick={() => handleLanguage('pt-BR')} src={iconBrazil} alt="Brasil Flag" />
            <img onClick={() => handleLanguage('en-US')} src={iconUsa} alt="USA Flag" />

          </ButtonSelectHero>
        }


        {isDesktop ? (
          <>
            <Container>
              <ContentDesk isVisible={isVisible}>
                <Box
                  className="skyscraper"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Text
                    as={'h2'}
                    variant="h2Desktop"
                    color={'#fff'}
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    fontSize={'40px'}
                    lineHeight={'45px'}
                  >
                    A UNIQUE <BrDesk/> SKYSCRAPER
                  </Text>
                </Box>
                <Box
                  width={isDesktop ? '391px' : '100%'}
                  mt={isDesktop ? '151px' : '0'}
                >

                  <Text
                    as={'p'}
                    variant={'span22'}
                    color={'#fff'} mb={16}
                    fontSize={20}
                    uppercase
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    marginBottom={24}
                    className="primeiros-textos"
                  >
                    {translations.Intro.verdadeiro}
                  </Text>

                  <Box
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="textos-inspirado"
                    >
                    <Text variant={'span15'} color={'#fff'} fontSize={'17px'}>
                      {translations.Intro.ulli1}
                    </Text>
                    <Text variant={'span15'} color={'#fff'} fontSize={'17px'}>
                      {translations.Intro.ulli2}
                    </Text>
                    <Text variant={'span15'} color={'#fff'} fontSize={'17px'}>
                      {translations.Intro.ulli3}
                    </Text>
                    <Text variant={'span15'} color={'#fff'} fontSize={'17px'}>
                      {translations.Intro.ulli4}
                    </Text>

                    <ButtonHero
                      color="yellow"
                      onClick={() => handleOpenModal()}
                    >
                      {translations.Intro.btnReceba}
                    </ButtonHero>
                  </Box>

                  <Img
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    onClick={() => window.open('https://www.loopdesignawards.com/project/biosquare-sao-paulo/', '_blank')}
                    src={seloLoopBranco} alt="Selo Loop Branco"
                    style={{ cursor: 'pointer' }}
                  />
                </Box>
              </ContentDesk>
            </Container>
          </>
          ) : (
            <Img
              src={seloLoopBranco} alt="Selo Loop Branco"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          )
        }

        <Modal
          open={openModal}
          expo={<ExpoModal title="Entre em contato por email" />}
          onClose={() => setOpenModal(false)}
        >
          <ContactForm />
        </Modal>
      </Section>

      { !isDesktop && (
        <SectionTexts>
          <Container>
            <Content>
              <Box
                width={isDesktop ? '391px' : '100%'}
                mt={isDesktop ? '64px' : '0'}
              >

                <Text
                  as={'p'}
                  variant={'span22'}
                  color={'#BFA66B'}
                  mt={16}
                  mb={16}
                  fontSize={20}
                  uppercase
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  marginBottom={24}
                >
                  {translations.Intro.verdadeiro}
                </Text>

                <Text
                  as={'h2'}
                  variant="h2Mobile"
                  color={'#21312B'}
                  mb={16}
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  A UNIQUE <BrMob/> SKYSCRAPER
                </Text>

                <Box
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="textos-inspirado"
                >
                  <Text variant={'span15'} color={'#21322B'} fontSize={'17px'}>
                    {translations.Intro.ulli1}
                  </Text>
                  <Text variant={'span15'} color={'#21322B'} fontSize={'17px'}>
                    {translations.Intro.ulli2}
                  </Text>
                  <Text variant={'span15'} color={'#21322B'} fontSize={'17px'}>
                    {translations.Intro.ulli3}
                  </Text>
                  <Text variant={'span15'} color={'#21322B'} fontSize={'17px'}>
                    {translations.Intro.ulli4}
                  </Text>

                  <ButtonHero
                    onClick={() => handleOpenModal()}
                  >
                    {translations.Intro.btnReceba}
                  </ButtonHero>
                </Box>
              </Box>
            </Content>
          </Container>
        </SectionTexts>
      )}
    </>
  );
};

export default Hero;

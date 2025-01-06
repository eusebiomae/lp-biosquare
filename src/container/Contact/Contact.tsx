import React, { useContext, useState } from 'react';
import { Box, Button, Text } from '../../components';
import { ContactForm } from '../../forms';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import { BoxForm, BoxText, CBRE, Container, ContentMapa } from './styles';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { LogoCBRE } from '../../assets/contact';
import { BrMob } from '../Hero/styles';
import { mapaDesk, mapaMob } from '../../assets/localization';

const Contact: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext  = useContext(LanguageContext);

  const [isImageVisible, setImageVisible] = useState(true);

  const toggleVisibility = () => {
    setImageVisible(!isImageVisible);
  };

  const handleOpenMap = () => {
    const mapURL = 'https://maps.app.goo.gl/d2eAy8CAMiMbxySc9';
    const mapWindow = window.open(mapURL, '_blank');

    if (mapWindow) {
      mapWindow.focus();
    } else {
      window.location.href = mapURL;
    }
  };

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  return (
    <>
      <Container data-header="contact">
        <BoxText>
          <Text
            as="h2"
            variant="big"
            color={theme.colors.brown}
          >
            {translations.Contact.title}
          </Text>
          <Text
            variant='h2Desktop'
          >
            {translations.Contact.label}
          </Text>
        </BoxText>

        <BoxForm>
          <ContactForm />
        </BoxForm>

        <CBRE>
          <img src={LogoCBRE} alt="Logo CBRE" />
          <Text variant='h3Desktop'>(11) 5185-4688</Text>
        </CBRE>
      </Container>

      <ContentMapa
          data-aos="fade-up"
          data-aos-duration="1500"
      >
        <Container>
          <Box mt={40}>
            <Text
              as={'p'}
              variant="span30"
              mb={16}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              {translations.Localization.textmapaddress}
            </Text>

            <Box
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {isImageVisible ? (
                <div>
                  {isDesktop ? (<span> {translations.Localization.textmapaddress1} <BrMob/> {translations.Localization.textmapaddress1a}</span>) :
                    (<span> {translations.Localization.textmapaddress2} <BrMob/> {translations.Localization.textmapaddress1a}</span>)
                  }

                  <img
                    src={isDesktop ? mapaDesk : mapaMob}
                    alt="Imagem Mapa"
                    id="mapImage"
                    onClick={toggleVisibility}
                  />
                </div>
              ) : null}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0366414709!2d-46.68734222385354!3d-23.567127461805573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce577676b90851%3A0xa2238f4586bcba44!2sR.%20Cap.%20Ant%C3%B4nio%20Rosa%2C%20422%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001443-010!5e0!3m2!1spt-BR!2sbr!4v1707507217365!5m2!1spt-BR!2sbr"
                width="100%"
                height="580"
                loading="lazy"
                style={{ display: isImageVisible ? 'none' : 'block' }}
              ></iframe>
            </Box>



            <Button size={isDesktop ? 'small' : 'xsmall'} color="yellow" onClick={handleOpenMap}>
              {translations.Localization.textmapbtn}
            </Button>
          </Box>
        </Container>

      </ContentMapa>
    </>
  );
};

export default Contact;

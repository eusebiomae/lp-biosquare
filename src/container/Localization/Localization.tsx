import { useState, useContext } from "react";
import { Box, Button, Container, ImageMagnifier, Text } from "../../components";
import { useWindowSize } from "../../providers";
import { ContainerMap, ContentBanner, ContentHeader, ContentInfos, Section } from
"./styles";
import { linhasMapa, mapaIlustradoNew } from "../../assets/localization";
import { BrDesk } from "../Hero/styles";
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { linhasTitle } from "../../assets/about";
import { QBody } from "../../assets/icons";

const Localization: React.FC = () => {
const { isDesktop } = useWindowSize();

const languageContext  = useContext(LanguageContext);

const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

const handleOpenMap = () => {
  const mapURL = 'https://maps.app.goo.gl/d2eAy8CAMiMbxySc9';
  const mapWindow = window.open(mapURL, '_blank');

  if (mapWindow) {
    mapWindow.focus();
  } else {
    window.location.href = mapURL;
  }
};

return (
<Section data-header="localization">
  <Container
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <hr style={{width: '100%', height: '1px', backgroundColor: '#BFA66B', marginBottom: '48px',}}/>

    <ContentBanner>
      <Box
        display={isDesktop ? 'flex' : ''}
        marginX={isDesktop ? '40px' : '20px'}
        position={'absolute'}
        bottom={isDesktop ? '33px' : '10px'}
        left={0}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        width={'100%'}
      >
        <Text
          width={isDesktop ? '380px' : '280px'}
          variant={isDesktop ? 'h1Desktop' : 'h2Desktop'}
          color={'#BFA66B'}
          fontSize={isDesktop ? '27px' : '20px'}
          lineHeight={isDesktop ? '41px' : '30px'}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {translations.Localization.textpanoramica}
        </Text>
        <img src={linhasMapa} alt="Linhas Background Banner"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
      </Box>
    </ContentBanner>
  </Container>

  {!isDesktop && (
    <Box
      data-aos="fade-up"
      data-aos-duration="1500"
      mt={'40px'}
    >
      {isDesktop ? (
      <ContainerMap>

        <ImageMagnifier
          src={mapaIlustradoNew}
          alt="Mapa Ilustrado da região"
        />

        <Text as={'p'} variant="legend" textAlign={'start'}>
          *O Walk Score mede a capacidade de caminhada de
          <BrDesk /> qualquer endereço do mundo. https://www.walkscore.com
        </Text>
      </ContainerMap>
      ) : (
      <>
        <img src={mapaIlustradoNew} alt="Mapa Ilustrado da região" />

        <Text as={'p'} variant="legend" margin={'0 20px'}>
          *O Walk Score mede a capacidade de caminhada de qualquer endereço do mundo. https://www.walkscore.com
        </Text>
      </>
      )}
    </Box>
  )}

  <ContentHeader>
    <Box width={isDesktop ? '40%' : ''} mb={isDesktop ? '' : '21px'}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <Text variant={"h2Desktop"} color={'#BFA66B'} mb={10}>
        {translations.Localization.textsectionlocalizacao}
      </Text>
      <img src={linhasTitle} alt="Linhas Background Decorativo do Titulo" />
    </Box>
    <Box>
      <img
        src={QBody}
        alt="Letra Q Background section"
        style={{width: '44px',}}
        data-aos="fade-left"
        data-aos-duration="1500"
      />
    </Box>
  </ContentHeader>

  <ContentInfos
    style={isDesktop ? {
      marginInline: '100px',
    } : {
      marginInline: '20px',
    }}
  >
    <Box
      data-aos="fade-left"
      data-aos-duration="1500"
      mt={isDesktop ? 'initial' : '40px'}
    >
      <Text variant={'span22'} fontSize={20} color={'#000'} width={'288px'}>
        {translations.Localization.textmapleft1}
      </Text>
      <Text variant={'span22'} fontSize={20} color={'#000'} width={'240px'} mt={'48px'}>
        {translations.Localization.textmapleft2}
      </Text>
      {/* <Text variant={'span22'} fontSize={20} color={'#BFA66B'} width={'270px'} mt={'48px'}>
        {translations.Localization.textmapleft3}
      </Text> */}

      <Button size={isDesktop ? 'small' : 'full'} mt={'24px'} color="yellow" onClick={handleOpenMap}>
        {translations.Localization.textmapbtn}
      </Button>
    </Box>

    {isDesktop && (
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {isDesktop ? (
          <ContainerMap>
            <ImageMagnifier
              src={mapaIlustradoNew}
              alt="Mapa Ilustrado da região"
            />

            <Text as={'p'} variant="legend" textAlign={isDesktop ? 'end' : 'initial' }>
              {translations.Localization.textwalkscore}
            </Text>
          </ContainerMap>
          ) : (
          <>
            <img src={mapaIlustradoNew} alt="Mapa Ilustrado da região" />

            <Text as={'p'} variant="legend" margin={'0 20px'} textAlign={'start'}>
              {translations.Localization.textwalkscore}
            </Text>
          </>
          )}
        </Box>
    )}

    <Box
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <Text variant={'span22'} fontSize={17} width={isDesktop ? '213px' : '100%'} color={'#000'} textAlign={isDesktop ? 'right' : 'left'}>
        {translations.Localization.textmapright1}
      </Text>

      <Text variant={'span22'} fontSize={17} width={isDesktop ? '213px' : '100%'} color={'#000'} textAlign={isDesktop ? 'right' : 'left'} mt={isDesktop ? '48px' : '24px'}>
        {translations.Localization.textmapright2}
      </Text>

      <Text variant={'span22'} fontSize={17} width={isDesktop ? '213px' : '100%'} color={'#000'} textAlign={isDesktop ? 'right' : 'left'} mt={isDesktop ? '48px' : '24px'}>
        {translations.Localization.textmapright3}
      </Text>

      <Text variant={'span22'} fontSize={17} width={isDesktop ? '213px' : '100%'} color={'#000'} textAlign={isDesktop ? 'right' : 'left'} mt={isDesktop ? '48px' : '24px'}>
        {translations.Localization.textmapright4}
      </Text>

      <Text variant={'span22'} fontSize={17} width={isDesktop ? '213px' : '100%'} color={'#000'} textAlign={isDesktop ? 'right' : 'left'} mt={isDesktop ? '48px' : '24px'}>
        {translations.Localization.textmapright5}
      </Text>

    </Box>

  </ContentInfos>

  <Container>
    <hr style={{width: '100%', height: '1px', backgroundColor: '#BFA66B', marginTop: '48px',}}/>
  </Container>

</Section>
);
};

export default Localization;

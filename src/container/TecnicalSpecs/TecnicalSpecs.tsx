import { Box, Button, Container, Modal, Text } from "../../components";
import { useWindowSize } from "../../providers";
import { ContentBannerSpecs, ContentCorteEsquematico, ContentImplantacao, ContentLajeSpecs, Section } from "./styles";
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { useContext, useState } from "react";
import { linhasTitle } from "../../assets/about";
import { linhasMapa } from "../../assets/localization";
import ExpoModal from "../ExpoModal";
import { ContactForm } from "../../forms";
import { corteDesk, corteDeskEn, corteMob, corteMobEn, implantacao, linhasCorteUp, linhasCorteUpMob, quadroAreasMob } from "../../assets/specs";
import { QSpecs } from "../../assets/icons";
import Apartments from "../Apartments";

const TecnicalSpecs: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Section data-header="specs">
      <Container>
        <Box width={isDesktop ? '40%' : ''} mb={isDesktop ? '' : '21px'}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <Text variant={"h2Desktop"} color={'#BFA66B'} mb={10}>
            {translations.Especification.textsectionespecificacoes}
          </Text>
          <img src={linhasTitle} alt="Linhas Background Decorativo do Titulo" />
        </Box>

        <ContentBannerSpecs
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Box
            display={isDesktop ? 'flex' : ''}
            marginX={isDesktop ? '40px' : '0px'}
            position={'absolute'}
            top={isDesktop ? '33px' : '0'}
            left={0}
            justifyContent={'space-between'}
            alignItems={'flex-end'}
            width={'100%'}
            height={isDesktop ? '' : '100%'}
          >
            <Text
              backgroundColor={'rgba(33, 49, 43, 0.85)'}
              width={isDesktop ? '238px' : '160px'}
              variant={isDesktop ? 'h1Desktop' : 'h2Desktop'}
              padding={'48px 30px'}
              color={'#fff'}
              lineHeight={isDesktop ? '25px' : '30px'}
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              {translations.Especification.textespecificacoesbanner}
            </Text>

            <img src={linhasMapa} alt="Linhas Background Banner"
              data-aos="fade-right"
              data-aos-duration="1500"
            />
          </Box>

          <Box
            className="beforeQ"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
          </Box>
        </ContentBannerSpecs>

        <ContentLajeSpecs
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Box
            marginX={isDesktop ? '47px' : '30px'}
          >
            <Text variant="span22" fontSize={isDesktop ? '22px' : '27px'} lineHeight={'34px'} color={'#21312B'}>
              {translations.Especification.textlajetitle}
            </Text>
          </Box>

          <Box
            marginX={isDesktop ? '47px' : 'initial'}
            marginLeft={isDesktop ? '47px' : '30px'}
            mt={'22px'}
            display={'flex'}
            flexDirection={isDesktop ? 'initial' : 'column'}
            flexWrap={isDesktop ? 'wrap' : 'nowrap'}
            justifyContent={isDesktop ? 'space-between' : 'initial'}
            width={isDesktop ? '922px' : '275px'}
          >
            <ul style={{listStyle: 'disc', marginLeft: '15px'}}>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli1}
                </Text>
              </li>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli2}
                </Text>
              </li>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli3}
                </Text>
              </li>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli4}
                </Text>
              </li>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli5}
                </Text>
              </li>
            </ul>

            <ul style={{listStyle: 'disc', width:'407px'}}>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli6}
                </Text>
              </li>
              <li>
                <Text variant="span15">
                  {translations.Especification.textlajeli7}
                </Text>
              </li>
            </ul>
          </Box>

          <Box
            marginX={isDesktop ? '47px' : '30px'}
            mt={isDesktop ? '32px' : '19px'}
            display={'flex'}
            flexDirection={isDesktop ? 'initial' : 'column'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >

            <Button
              size={isDesktop ? 'small' : 'full'}
              color="yellow"
              onClick={() => handleOpenModal()}
            >
              {translations.Especification.textlajebtn}
            </Button>

            <Text variant="legend" fontSize={'9px'} width={isDesktop ? '602px' : '100%'} marginTop={isDesktop ? '0' : '20px'}>
              {translations.Especification.textlajemiudas}
            </Text>

          </Box>

          <Box>
            {isDesktop && (
              <>
                <Box
                  marginX={'47px'}
                  width={'366px'}
                  backgroundColor={'rgba(33, 49, 43, 0.90)'}
                  padding={'23px 16px'}
                  borderRadius={'10px'}
                >
                    <Text variant="span15" color={'#fff'}>
                      <ul style={{listStyle: 'disc', marginLeft: '16px',}}>
                        <li>
                          {translations.Especification.textrooftopli1}
                        </li>
                        <li>
                          {translations.Especification.textrooftopli2}
                        </li>
                        <li>
                          {translations.Especification.textrooftopli3}
                        </li>
                      </ul>
                    </Text>
                </Box>
                {/* <Box
                  marginX={'47px'}
                  width={'184px'}
                  backgroundColor={'rgba(33, 49, 43, 0.90)'}
                  padding={'30px 22px'}
                  borderRadius={'10px'}
                  mt={'33px'}
                >
                  <Text variant="span22" color={'#fff'} fontSize={'24px'}>
                    {translations.Especification.textrooftoptitle}
                  </Text>
                </Box> */}
              </>
            )}
          </Box>

          <Box
            data-aos="fade"
            data-aos-duration="1500"
          ></Box>

          <hr />
        </ContentLajeSpecs>


        {!isDesktop && (
          <>
            <Box
              backgroundColor={'rgba(33, 49, 43, 0.90)'}
              padding={'23px 16px'}
              borderRadius={'10px'}
              mt={'25px'}
            >
                <Text variant="span15" color={'#fff'}>
                  <ul style={{listStyle: 'disc', marginLeft: '16px',}}>
                    <li>
                      {translations.Especification.textrooftopli1}
                    </li>
                    <li>
                      {translations.Especification.textrooftopli2}
                    </li>
                    <li>
                      {translations.Especification.textrooftopli3}
                    </li>
                  </ul>
                </Text>
            </Box>
            {/* <Box
              backgroundColor={'rgba(33, 49, 43, 0.90)'}
              padding={'30px 66px'}
              borderRadius={'10px'}
              mt={'18px'}
            >
              <Text variant="span22" color={'#fff'} fontSize={'24px'}>
                {translations.Especification.textrooftoptitle}
              </Text>
            </Box> */}
          </>
        )}

        <ContentCorteEsquematico>
          <Box
            width={166}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Text variant="span22" fontSize={isDesktop ? '25px' : '27px'} lineHeight={'34px'} color={'#21312B'}>
              {translations.Especification.textesquematicotitle}
            </Text>
          </Box>

          <Box
            display={'flex'}
            flexDirection={isDesktop ? 'initial' : 'column'}
            mt={31}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Text variant="span15" color={'#000'} fontSize={17} width={241} mr={25}>
              {translations.Especification.textesquematicoup1}
            </Text>

            <Text variant="span15" color={'#000'} fontSize={17} width={285} mt={isDesktop ? 0 : '15px'}>
              {translations.Especification.textesquematicoup2}
            </Text>

            {isDesktop && (
              <Text variant="span15" color={'#000'} width={225} fontSize={25} mt={'-50px'}>
                <img src={linhasCorteUp} alt="Linhas Background" height={'31px'}/>
                {translations.Especification.textesquematicoup3}
              </Text>
            )}
          </Box>

          <Box
            textAlign={'center'}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {translations === dataLanguagesPtEn && <img src={isDesktop ? corteDesk : corteMob} alt="Imagem de corte esquemático" />}
            {translations === dataLanguagesEnPt && <img src={isDesktop ? corteDeskEn : corteMobEn} alt="Imagem de corte esquemático" />}

            {!isDesktop && (
              <>
                <Text
                  variant="span15"
                  color={'#000'}
                  width={190}
                  fontSize={25} mt={32}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <img src={linhasCorteUpMob} alt="Linhas Background Decorativo do Titulo" style={{marginLeft: '-25px', marginBottom: '16px',}} />
                  {translations.Especification.textesquematicoup3}
                </Text>
                <img
                  src={quadroAreasMob} alt="Imagem Quadro Áreas Mobile"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                />
              </>
            )}

          </Box>

          <Box
            display={isDesktop ? 'flex' : 'initial'}
            marginX={isDesktop ? '100px' : 0}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Text variant="legendCorte" mr={'50px'} mt={isDesktop ? 0 : '25px'}>
              <ul>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli1}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli2}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli3}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli4}
                </li>
              </ul>
            </Text>
            <Text variant="legendCorte">
              <ul>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli5}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli6}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli7}
                </li>
                <li style={{marginBottom: '12px',}}>
                  {translations.Especification.textesquematicoli8}
                </li>
              </ul>
            </Text>
          </Box>
        </ContentCorteEsquematico>

        <ContentImplantacao>
          <Box
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Text variant="span22" fontSize={isDesktop ? '25px' : '27px'} lineHeight={'34px'} color={'#21312B'}>
              {translations.Especification.textimplantacaotitle}
            </Text>
          </Box>

          <Box
            mt={24}
            border={isDesktop ? '1px solid #BFA66B' : 'initial'}
            borderRadius={20}
            display={'flex'}
            flexDirection={isDesktop ? 'initial' : 'column-reverse'}
            justifyContent={'space-around'}
            alignItems={isDesktop ? 'center' : 'flex-start'}
            padding={isDesktop ? '8px 0' : '4px'}
            position={'relative'}
            zIndex={1}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Box
              data-aos="fade-left"
              data-aos-duration="1500"
              mb={45}
            >
              <Text variant="nav" fontWeight={700} lineHeight={'19px'} color={'#354543'}>
                <span style={{backgroundColor: '#BFA66B', color: '#000', padding: '3px 7px', marginRight: '5px',}}>1</span>
                {translations.Especification.textimplantacaoli1}
              </Text>
              <Text variant="nav" fontWeight={700} lineHeight={'19px'} color={'#354543'} mt={18}>
                <span style={{backgroundColor: '#BFA66B', color: '#000', padding: '3px 5px', marginRight: '5px',}}>2</span>
                {translations.Especification.textimplantacaoli2}
              </Text>
              <Text variant="nav" fontWeight={700} lineHeight={'19px'} color={'#354543'} mt={18}>
                <span style={{backgroundColor: '#BFA66B', color: '#000', padding: '3px 5px', marginRight: '5px',}}>3</span>
                {translations.Especification.textimplantacaoli3}
              </Text>
              <Text variant="nav" fontWeight={700} lineHeight={'19px'} color={'#354543'} mt={18}>
                <span style={{backgroundColor: '#BFA66B', color: '#000', padding: '3px 5px', marginRight: '5px',}}>4</span>
                {translations.Especification.textimplantacaoli4}
              </Text>
              <Text variant="nav" fontWeight={700} lineHeight={'19px'} color={'#354543'} mt={18}>
                <span style={{backgroundColor: '#BFA66B', color: '#000', padding: '3px 5px', marginRight: '5px',}}>5</span>
                {translations.Especification.textimplantacaoli5}
              </Text>
            </Box>

            <Box
              data-aos="fade-right"
              data-aos-duration="1500"
              border={isDesktop ? 'initial' : '1px solid #BFA66B'}
              borderRadius={20}
              padding={isDesktop ? 0 : '5px'}
              mb={isDesktop ? 0 : '25px'}
              backgroundColor={'#fff'}
              zIndex={'-1'}
            >
              <img className="img-implantacao" src={implantacao} alt="Planta implantaçaõ"/>
            </Box>

          </Box>

          <Box
            width={isDesktop ? '109px' : '153px'}
            height={isDesktop ? '99px' : '134px'}
            position={'absolute'}
            bottom={isDesktop ? '-16px' : '135px'}
            left={isDesktop ? '25px' : 'initial'}
            right={isDesktop ? 'initial' : '-71px'}
            zIndex={0}
          >
            <img src={QSpecs} alt="Imagem Q Specs" />
          </Box>
        </ContentImplantacao>
      </Container>

      <Apartments />

      <Modal
        open={openModal}
        expo={<ExpoModal title="Entre em contato por email" />}
        onClose={() => setOpenModal(false)}
      >
        <ContactForm />
      </Modal>
    </Section>
  );
};

export default TecnicalSpecs;

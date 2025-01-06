import { Box, Container, Text } from "../../components";
import { BoxCards, Section } from "./styles";
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { useContext, useState } from "react";
import { useWindowSize } from "../../providers";
import { linhasTitle, setaBtn } from "../../assets/about";
import Video from "../Video";
import { ESG, Fitwell, LeadGold, LoopBlack } from "../../assets/selos";
import { QBody } from "../../assets/icons";

const About: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const [expanded, setExpanded] = useState(false);
  const [expandedFit, setExpandedFit] = useState(false);
  const [expandedLoop, setExpandedLoop] = useState(false);
  const [expandedEsg, setExpandedEsg] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClickFit = () => {
    setExpandedFit(!expandedFit);
  };
  const handleExpandClickLoop = () => {
    setExpandedLoop(!expandedLoop);
  };
  const handleExpandClickEsg = () => {
    setExpandedEsg(!expandedEsg);
  };


  return (
    <Section data-header="biosquare">
      <Container>
        <Box
          display={isDesktop ? 'flex' : ''}
        >
          <Box width={isDesktop ? '40%' : ''} mb={isDesktop ? '' : '21px'}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Text variant={"h2Desktop"} color={'#BFA66B'} mb={10}>
              {translations.About.textsectionsobre}
            </Text>
            <img src={linhasTitle} alt="Linhas Background Decorativo do Titulo" />
          </Box>

          <Box width={isDesktop ? '60%' : ''}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <Text as={'h2'} variant={'h1Desktop'} mb={'33px'}>
              {translations.About.textintro}
            </Text>

            <Box display={isDesktop ? 'flex' : ''} justifyContent={'space-between'} className="text-empreendimento">
              <Text as={'p'}>
                {translations.About.textbodydireito}
              </Text>
              <Text as={'p'} mt={isDesktop ? '0' : '25px'}>
                {translations.About.textbodyesquerdo}
              </Text>
            </Box>
          </Box>

        </Box>

        <Video />

        <BoxCards
          data-header="sustainability"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <img src={QBody} alt="Imagem Q background"
            data-aos="fade-up"
            data-aos-duration="1500"
          />

          <Text variant='span30' fontSize={isDesktop ? '25px' : '22px'} color={'#fff'} textAlign={'center'} padding={'48px 0 21px'} marginX={isDesktop ? 'initial' : '20px'}>
            {translations.About.textintroselos}
          </Text>

          {/* Selos */}
          <Box
            display={'flex'}
            flexDirection={isDesktop ? 'initial' : 'column'}
            flexWrap={isDesktop ? 'wrap' : 'nowrap'}
            justifyContent={'space-between'}
            mt={86}
            pb={isDesktop ? '75px' : '18px'}
            paddingX={16}
            className="selos-box"
          >
            {/* Selo Lead Gold */}
            <Box
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box
                border={'1px solid #BFA66B'}
                borderRadius={'10px'}
                maxWidth={'100%'}
                width={isDesktop ? '473px' : '100%'}
                height={'auto'}
                padding={'30px'}
              >
                <img className="selo-gold" src={LeadGold} alt="Selo Lead Gold" />

                <Text variant='body' fontSize={17} color={'#fff'} fontWeight={300} mt={24} lineHeight={'30px'}>
                  {expanded ? translations.About.textselogold : translations.About.textselogold.slice(0, 60)}
                </Text>

                <button onClick={handleExpandClick}>
                  {expanded ? [translations.About.textselobtncollapse] : [translations.About.textselobtnexpand]}
                  <img src={setaBtn} alt="Seta Button Expandir" style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}/>
                </button>
              </Box>
            </Box>

            {/* Selo Fitwell */}
            <Box
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box
                border={'1px solid #BFA66B'}
                borderRadius={'10px'}
                maxWidth={'100%'}
                width={isDesktop ? '473px' : '100%'}
                height={'auto'}
                padding={'30px'}
              >
                <img className="selo-fitwell" src={Fitwell} alt="Selo Lead Gold" />
                <Text variant='body' fontSize={17} color={'#fff'} fontWeight={300} mt={24} lineHeight={'30px'}>
                  {expandedFit ? translations.About.textselofitwel : translations.About.textselofitwel.slice(0, 82)}
                </Text>

                <button onClick={handleExpandClickFit}>
                  {expandedFit ? [translations.About.textselobtncollapse] : [translations.About.textselobtnexpand]}
                  <img src={setaBtn} alt="Seta Button Expandir" style={{ transform: expandedFit ? 'rotate(180deg)' : 'none' }}/>
                </button>
              </Box>
            </Box>

            {/* Selo Loop */}
            <Box
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box
                border={'1px solid #BFA66B'}
                borderRadius={'10px'}
                maxWidth={'100%'}
                width={isDesktop ? '473px' : '100%'}
                height={'auto'}
                padding={'30px'}
              >
                <img className="selo-loop" src={LoopBlack} alt="Selo Lead Gold" />
                <Text variant='body' fontSize={17} color={'#fff'} fontWeight={300} mt={24} lineHeight={'30px'}>
                  {expandedLoop ? translations.About.textseloloop : translations.About.textseloloop.slice(0, 60)}
                </Text>

                <button onClick={handleExpandClickLoop}>
                  {expandedLoop ? [translations.About.textselobtncollapse] : [translations.About.textselobtnexpand]}
                  <img src={setaBtn} alt="Seta Button Expandir" style={{ transform: expandedLoop ? 'rotate(180deg)' : 'none' }}/>
                </button>
              </Box>
            </Box>

            {/* Selo ESG */}
            <Box
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box
                border={'1px solid #BFA66B'}
                borderRadius={'10px'}
                maxWidth={'100%'}
                width={isDesktop ? '473px' : '100%'}
                height={'auto'}
                padding={'30px'}
              >
                <img className="selo-esg" src={ESG} alt="Selo Lead Gold" />
                <Text variant='body' fontSize={17} color={'#fff'} fontWeight={300} mt={24} lineHeight={'30px'}>
                  {expandedEsg ? translations.About.textseloesg : translations.About.textseloesg.slice(0, 74)}
                </Text>

                <button onClick={handleExpandClickEsg}>
                  {expandedEsg ? [translations.About.textselobtncollapse] : [translations.About.textselobtnexpand]}
                  <img src={setaBtn} alt="Seta Button Expandir" style={{ transform: expandedEsg ? 'rotate(180deg)' : 'none' }}/>
                </button>
              </Box>
            </Box>
          </Box>

          <Box
            position={"absolute"}
            bottom={15}
            right={85}
          >
            <Text
              color={'#fff'}
              fontSize={10}
            >
              { translations.About.textasteriscosobre1 }
            </Text>
            <Text
              color={'#fff'}
              fontSize={10}
            >
              { translations.About.textasteriscosobre2 }
            </Text>
          </Box>
        </BoxCards>

      </Container>
    </Section>
  );
};

export default About;

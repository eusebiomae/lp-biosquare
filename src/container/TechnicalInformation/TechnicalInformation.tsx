import React, { useContext } from 'react';
import { Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import { Container, Producers, ProducersItem, Slides, SwiperReact, SwiperSlide } from './styles';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';
import { Navigation, Pagination } from 'swiper';
import { Cardim, PerkinsEWill, StudioIx } from '../../assets/technical';

const Contact: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext  = useContext(LanguageContext);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const data = [
    {
      id: 1,
      title1: [translations.Tecnicals.textempreendimentotitle],
      text1: [translations.Tecnicals.textempreendimentocontent],
      title2: [translations.Tecnicals.textpeDireitotitle],
      text2: [translations.Tecnicals.textpeDireitocontent],
      title3: [translations.Tecnicals.textpisoElevadotitle],
      text3: [translations.Tecnicals.textpisoElevadocontent],
    },
    {
      id: 2,
      title1: [translations.Tecnicals.textpavimentotitle],
      text1: [translations.Tecnicals.textpavimentocontent],
      title2: [translations.Tecnicals.textpisotitle],
      text2: [translations.Tecnicals.textpisocontent],
      title3: [translations.Tecnicals.textsobrecargatitle],
      text3: [translations.Tecnicals.textsobrecargacontent],
    },
    {
      id: 3,
      title1: [translations.Tecnicals.textfachadatitle],
      text1: [translations.Tecnicals.textfachadacontent],
      title2: [translations.Tecnicals.textleasetitle],
      text2: [translations.Tecnicals.textleasecontent],
      title3: [translations.Tecnicals.textflexibilidadetitle],
      text3: [translations.Tecnicals.textflexibilidadecontent],
    },
    {
      id: 4,
      title1: [translations.Tecnicals.textelevadorestitle],
      text1: [translations.Tecnicals.textelevadorescontent],

    },
    {
      id: 4,
      title1: [translations.Tecnicals.textgastitle],
      text1: [translations.Tecnicals.textgascontent],
      title2: [translations.Tecnicals.textbycicletitle],
      text2: [translations.Tecnicals.textbyciclecontent],

    },
    {
      id: 5,
      title1: [translations.Tecnicals.textrestroomstitle],
      text1: [translations.Tecnicals.textrestroomscontent],
    },
    {
      id: 5,
      title1: [translations.Tecnicals.textlightingtitle],
      text1: [translations.Tecnicals.textlightingcontent],
      title2: [translations.Tecnicals.textairConditioningtitle],
      text2: [translations.Tecnicals.textairConditioningcontent],
    },
    {
      id: 6,
      title1: [translations.Tecnicals.textenergytitle],
      text1: [translations.Tecnicals.textenergycontent],
    },
    {
      id: 6,
      title1: [translations.Tecnicals.textdockstitle],
      text1: [translations.Tecnicals.textdockscontent],
      title2: [translations.Tecnicals.textgaragetitle],
      text2: [translations.Tecnicals.textgaragecontent],
    },
    {
      id: 7,
      title1: [translations.Tecnicals.textgeneratorstitle],
      text1: [translations.Tecnicals.textgeneratorscontent],
      title2: [translations.Tecnicals.textsecuritytitle],
      text2: [translations.Tecnicals.textsecuritycontent],
    },
    {
      id: 7,
      title1: [translations.Tecnicals.textbmstitle],
      text1: [translations.Tecnicals.textbmscontent],
      title2: [translations.Tecnicals.textqualitytitle],
      text2: [translations.Tecnicals.textqualitycontent],
      title3: [translations.Tecnicals.textventilationtitle],
      text3: [translations.Tecnicals.textventilationcontent],
    },
    {
      id: 8,
      title1: [translations.Tecnicals.textfireFightintitle],
      text1: [translations.Tecnicals.textfireFightincontent],
      title2: [translations.Tecnicals.textwaterReusetitle],
      text2: [translations.Tecnicals.textwaterReusecontent],
    },
    {
      id: 9,
      title1: [translations.Tecnicals.textsustainabilitytitle],
      text1: [translations.Tecnicals.textsustainabilitycontent],

    },
    {
      id: 10,
      title1: [translations.Tecnicals.texttelecommunicationtitle],
      text1: [translations.Tecnicals.texttelecommunicationcontent],
      title2: [translations.Tecnicals.textdifferentialstitle],
      text2: [translations.Tecnicals.textdifferentialscontent],
    },
  ];

  const Swiper = ({ children }: any) => (
    <SwiperReact
      slidesPerView={isDesktop? 3 : 1}
      navigation={isDesktop? true : false}
      pagination={isDesktop? false : true}
      autoHeight={true}
      modules={[Navigation, Pagination]}
    >
      {children}
    </SwiperReact>
  );

  return (
    <Container>
      <header>
        <Text variant='h2Desktop' color={theme.colors.brown}>{translations.Tecnicals.textsectiontecnicals}</Text>
      </header>
      <Swiper>
          {data.map((item, index) => (
            <SwiperSlide>
              <Slides key={item.id}>
                <div>
                  <Text variant='carouselTechnicalTitle' mb={'8px'}>{item.title1}</Text>
                  <Text variant='Footer' mb={24}>{item.text1}</Text>
                </div>
                <div>
                  <Text variant='carouselTechnicalTitle' mb={'8px'}>{item.title2}</Text>
                  <Text variant='Footer' mb={24}>{item.text2}</Text>
                </div>
                <div>
                  <Text variant='carouselTechnicalTitle' mb={'8px'}>{item.title3}</Text>
                  <Text variant='Footer'>{item.text3}</Text>
                </div>
              </Slides>
            </SwiperSlide>
          ))}
        </Swiper>

        <Producers>
          <ProducersItem>
            <img src={PerkinsEWill} alt="Logo Perkins & Will" />
            <Text variant='h3Desktop'>{translations.Tecnicals.textaquitetura}</Text>
          </ProducersItem>
          <ProducersItem>
            <img src={Cardim} alt="Logo Cardim" />
            <Text variant='h3Desktop'>{translations.Tecnicals.textpaisagismo}</Text>
          </ProducersItem>
          <ProducersItem>
            <img src={StudioIx} alt="Logo Studios Ix" />
            <Text variant='h3Desktop'>{translations.Tecnicals.textluminotecnica}</Text>
          </ProducersItem>
        </Producers>
    </Container>
  );
};

export default Contact;

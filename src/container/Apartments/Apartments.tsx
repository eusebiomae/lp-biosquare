import React, { useContext, useState } from 'react';
import { BoxQ, TabButton, TabContainer, TabContent, TabContents, TabHeader } from './styles';
import { Box, Container, Swiper, Text } from '../../components';
import { areasAcessoPedestre, areasEmbasamento, areasFruicao, areasHall, areasLobbyB, areasLobbyEf, areasLobbySalas, areasRooftop, comercialLaje, corteLaje } from '../../assets/decorado';
import Plants from '../Plants';
import { useWindowSize } from '../../providers';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode
  }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);


  return (
    <TabContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabContainer>
  );
};

const Apartments: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const data = [
    {
      img: corteLaje,
      description: [ translations.Especification.textimages01 ],
      footnote: [ translations.Especification.textimages01footnote ],
    },
    {
      img: comercialLaje,
      description: [ translations.Especification.textimages02 ],
      footnote: [ translations.Especification.textimages01footnote ],
    },
  ];

  const dataAreas = [
    {
      img: areasEmbasamento,
      description: [ translations.Especification.textimages03 ],
    },
    {
      img: areasFruicao,
      description: [ translations.Especification.textimages03a1 ],
    },
    {
      img: areasAcessoPedestre,
      description: [ translations.Especification.textimages04 ],
    },
    {
      img: areasHall,
      description: [ translations.Especification.textimages05 ],
    },
    {
      img: areasLobbyEf,
      description: [ translations.Especification.textimages06 ],
    },
    {
      img: areasLobbySalas,
      description: [ translations.Especification.textimages07 ],
    },
    {
      img: areasLobbyB,
      description: [ translations.Especification.textimages08 ],
    },
    {
      img: areasRooftop,
      description: [ translations.Especification.textimages09 ],
    },
  ];

  return (
    <TabContents data-header="plans">
      <Container>
        <Container>
          <Text
            as="h2"
            variant='span22'
            fontSize={isDesktop ? '25px' : '27px'}
            lineHeight={'34px'}
            color={'#21312B'}
            mb={25}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            {translations.Especification.textdetalhestitle}
          </Text>
        </Container>

        <BoxQ>
          <Box
            data-aos="fade-left"
            data-aos-duration="1500"
            mb={90}
          >
            <Swiper data={dataAreas} />  {/* Decorados */}
          </Box>
        </BoxQ>

        <Tab
          tabs={[
            {
              label: translations.Especification.labelimages,
              content: <Swiper data={data} />
            },
            {
              label: translations.Especification.labelplants,
              content: <Plants/>
            },
          ]}
        />
      </Container>
    </TabContents>
  );
};

export default Apartments;

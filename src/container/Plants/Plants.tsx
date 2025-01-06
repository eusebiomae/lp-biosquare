import React, { useContext, useState } from 'react';
import { FiMaximize2 } from 'react-icons/fi';
import 'react-image-lightbox/style.css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Lightbox, Text } from '../../components';
import { useWindowSize } from '../../providers';
import theme from '../../theme';
import {
  BoxTitle,
  BtnMaximize,
  Section,
  Slides,
  SwiperReact,
  SwiperSlide,
} from './styles';
import { comercialLajeCorporativa, comercialLajeCorporativaTerraco, comercialPavimentoTipo1, linhasPlants, linhasPlantsTitle } from '../../assets/plants';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';
import { dataLanguagesPtEn, dataLanguagesEnPt } from '../../components/Languages/Languages';

const Plants: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);
  const languageContext = useContext(LanguageContext);
  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const handleGallery = (id: number) => {
    setSelectedImageIndex(id);
    setOpenGallery(true);
  };

  const data = [
    // {
    //   id: 1,
    //   img: comercialPavimento7Tipo2,
    //   title: [ translations.Especification.textplants01title ],
    //   title2: [ translations.Especification.textplants01title2 ],
    //   title3: [ translations.Especification.textplants01title3 ],
    //   description: [ translations.Especification.textplants01description ],

    //   local1: [ translations.Especification.local1 ],
    //   local2: [ translations.Especification.local2 ],
    //   local3: [ translations.Especification.local3 ],
    //   local4: [ translations.Especification.local4 ],
    //   local5: [ translations.Especification.local5 ],
    //   local6: [ translations.Especification.local6 ],
    //   local7: [ translations.Especification.local7 ],
    //   local8: [ translations.Especification.local8 ],
    //   local9: [ translations.Especification.local9 ],
    // },
    {
      id: 2,
      img: comercialPavimentoTipo1,
      title: [ translations.Especification.textplants01title ],
      title2: [ translations.Especification.textplants01title2 ],
      title3: [ translations.Especification.textplants01title3 ],
      description: [ translations.Especification.textplants01description ],

      local1: [ translations.Especification.local1 ],
      local2: [ translations.Especification.local2 ],
      local3: [ translations.Especification.local3 ],
      local4: [ translations.Especification.local4 ],
      local5: [ translations.Especification.local5 ],
      local6: [ translations.Especification.local6 ],
      local7: [ translations.Especification.local7 ],
      local8: [ translations.Especification.local8 ],
      local9: [ translations.Especification.local9 ],
    },
    // {
    //   id: 3,
    //   img: comercialPavimento7,
    //   title: [ translations.Especification.textplants01title ],
    //   title2: [ translations.Especification.textplants01title2 ],
    //   title3: [ translations.Especification.textplants01title3 ],
    //   description: [ translations.Especification.textplants01description ],

    //   local1: [ translations.Especification.local1 ],
    //   local2: [ translations.Especification.local2 ],
    //   local3: [ translations.Especification.local3 ],
    //   local4: [ translations.Especification.local4 ],
    //   local5: [ translations.Especification.local5 ],
    //   local6: [ translations.Especification.local6 ],
    //   local7: [ translations.Especification.local7 ],
    //   local8: [ translations.Especification.local8 ],
    //   local9: [ translations.Especification.local9 ],
    // },
    // {
    //   id: 4,
    //   img: comercialPavimentoNR,
    //   title: [ translations.Especification.textplants01title ],
    //   title2: [ translations.Especification.textplants01title2 ],
    //   title3: [ translations.Especification.textplants01title3 ],
    //   description: [ translations.Especification.textplants01description ],

    //   local1: [ translations.Especification.local1 ],
    //   local2: [ translations.Especification.local2 ],
    //   local3: [ translations.Especification.local3 ],
    //   local4: [ translations.Especification.local4 ],
    //   local5: [ translations.Especification.local5 ],
    //   local6: [ translations.Especification.local6 ],
    //   local7: [ translations.Especification.local7 ],
    //   local8: [ translations.Especification.local8 ],
    //   local9: [ translations.Especification.local9 ],
    // },
    {
      id: 5,
      img: comercialLajeCorporativa,
      titleSugest: [ translations.Especification.textplants02titlesugest ],
      title: [ translations.Especification.textplants02title ],
      title2: [ translations.Especification.textplants02title2 ],
      title3: [ translations.Especification.textplants02title3 ],
      description: [ translations.Especification.textplants02description ],

      desc1: [ translations.Especification.desc1 ],
      desc2: [ translations.Especification.desc2 ],
      desc3: [ translations.Especification.desc3 ],
      desc4: [ translations.Especification.desc4 ],
      desc5: [ translations.Especification.desc5 ],
      desc6: [ translations.Especification.desc6 ],
      desc7: [ translations.Especification.desc7 ],
    },
    {
      id: 6,
      img: comercialLajeCorporativaTerraco,
      titleSugest: [ translations.Especification.textplants02titlesugest ],
      title: [ translations.Especification.textplants02title ],
      title2: [ translations.Especification.textplants02title2 ],
      title3: [ translations.Especification.textplants02title3 ],
      description: [ translations.Especification.textplants02description ],

      desc1: [ translations.Especification.desc1 ],
      desc2: [ translations.Especification.desc2 ],
      desc3: [ translations.Especification.desc3 ],
      desc4: [ translations.Especification.desc4 ],
      desc5: [ translations.Especification.desc5 ],
      desc6: [ translations.Especification.desc6 ],
      desc7: [ translations.Especification.desc7 ],
    },
  ];

  const Swiper = ({ children }: any) => (
    <SwiperReact
      autoHeight
      slidesPerView={1}
      navigation
      pagination={
        !isDesktop && { dynamicBullets: true }
      }
      modules={[Navigation, Pagination]}
    >
      {children}
    </SwiperReact>
  );

  return (
    <Section data-header="plans">
      <img className='linhas-plantas-title' src={linhasPlantsTitle} alt="Linhas Plantas Title" />
      <Swiper>
        {data.map((item, index) => (
          <SwiperSlide>
            <Slides key={item.id}>
              {!isDesktop &&
                <BtnMaximize
                  onClick={() => handleGallery(index)}
                >
                  <FiMaximize2 />
                </BtnMaximize>
              }
              <img src={item.img} alt="Imagem Slide" />
            </Slides>

            <BoxTitle>
              {/* Title */}
              <Box
                width={isDesktop ? 300 : '100%'}
              >
                <Text
                  variant="span30"
                  color={theme.colors.brown}
                  mb={'10px'}
                >
                  {item.titleSugest}
                </Text>
                <Text
                  variant="span30"
                  color={theme.colors.black}
                >
                  {item.title}
                </Text>
              </Box>

              {/* Linhas Verticais */}
              <Box
                mt={'8px'}
              >
                <img src={linhasPlants} alt="Imagem de Linhas Verticais" />
              </Box>

              {/* Titles Conteudo */}
              <Box
                alignItems={'center'}
                justifyContent={'flex-start'}
                mb={26}
              >
                <Text
                  variant="h1Desktop"
                  color={theme.colors.brown}
                  mb={'10px'}
                >
                  {item.title2}
                </Text>

                <Text
                  variant="body"
                  fontSize={'17px'}
                  fontWeight={700}
                  lineHeight={'26px'}
                  color={theme.colors.black}
                >
                  {item.title3}
                </Text>

                {isDesktop &&
                  <BtnMaximize
                    onClick={() => handleGallery(index)}
                  >
                    <FiMaximize2 />
                  </BtnMaximize>
                }

              </Box>

              {/* Conteudo Descriptivo da PLanta */}

              <Box className='textos-plants'>
                <Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#bfc0ba', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local1}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#858680', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local2}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#004a8b', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local3}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#f1edc8', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local4}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#cba868', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local5}</Text>
                  </Box>
                </Box>
                <Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#737977', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local6}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#cba868', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local7}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#5bdafa', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local8}</Text>
                  </Box>
                  <Box
                    display={'flex'}
                    mb={'10px'}
                  >
                    <span style={{backgroundColor: '#00b199', width: '15px', height: '15px', marginRight: '15px', }}></span>
                    <Text as={'p'} variant={'legend'}>{item.local9}</Text>
                  </Box>
                </Box>
              </Box>

              <Box className='textos-plants-2' backgroundColor={'#fff'} position={'absolute'} bottom={isDesktop ? '75px' : '15px'} left={isDesktop ? '20px' : '8px'} padding={isDesktop ? 0 : '25px 10px'}>
                <Text as={'p'} variant={'legend'}>{item.desc1}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc2}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc3}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc4}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc5}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc6}</Text>
                <Text as={'p'} variant={'legend'}>{item.desc7}</Text>
              </Box>

            </BoxTitle>

          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={openGallery}
        selectedIndex={selectedImageIndex}
        images={data}
        onClose={() => setOpenGallery(false)}
      />
    </Section>
  );
};

export default Plants;

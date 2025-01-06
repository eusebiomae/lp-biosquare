import Link from 'next/link';
import React, { useContext } from 'react';
import { DetailRealizationAndIncorporation, Id360, LogoGd8, LogoKinea } from '../../assets/footer';
import { Container } from '../Grid';
import Text from '../Text';
import { BoxDescription, BrandsRealizationAndIncorporation, Content, FirstParagraphs, FirstRealization, Paragraphs, RealizationAndIncorporation, SecondParagraphs, SecondRealization, Section, TextContent, TextContentTitle } from './styles';
import { useWindowSize } from '../../providers';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../Languages/Languages';
import theme from '../../theme';

const Footer: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const languageContext  = useContext(LanguageContext);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  return (
    <Section data-header="idealization">
      <Content>
        <header>
          <Text variant='h2Desktop' color={theme.colors.brown}>{translations.Idealization.textsectionidealization}</Text>
        </header>
        <TextContent>
          <TextContentTitle>
            <Text as={'h2'} variant='h2Idealization'>{translations.Idealization.textesquerdatitle}</Text>
            <Text as={'h2'} variant='h2Idealization'>{translations.Idealization.textdireitatitle}</Text>
          </TextContentTitle>
          <Paragraphs>
            <FirstParagraphs>
              <Text variant='textIdealization' mb={22}>{translations.Idealization.textesquerdacontentup}</Text>
              <Text variant='textIdealization'>{translations.Idealization.textesquerdacontentbottom}</Text>
            </FirstParagraphs>
            <SecondParagraphs>
              <Text variant='textIdealization' mb={22}>{translations.Idealization.textdireitacontentup}</Text>
              <Text variant='textIdealization'>{translations.Idealization.textdireitacontentbottom}</Text>
            </SecondParagraphs>
          </Paragraphs>
          <Text variant='span' mt={40} uppercase>Daniel Ribeiro</Text>
        </TextContent>

        <RealizationAndIncorporation>
          <BrandsRealizationAndIncorporation>
            <FirstRealization>
              <Text variant='navButton' color={theme.colors.brown} mb={2}>{translations.Footer.realization}</Text>
              <img src={LogoKinea} alt="Logo Kinea" style={{width: "140px",}} />
            </FirstRealization>
            <SecondRealization>
              <Text variant='navButton' color={theme.colors.brown} mb={2}>{translations.Footer.realizationincorporation}</Text>
              <img src={LogoGd8} alt="Logo GD8" />
            </SecondRealization>
          </BrandsRealizationAndIncorporation>
          <img src={DetailRealizationAndIncorporation} alt='Imagem Detail & Realization' />
        </RealizationAndIncorporation>
      </Content>

      <BoxDescription>
        <Container>
          <Text as="h2" variant="Footer">
            {translations.Footer.footerlgpd}
          </Text>

          <Link href="https://id360.com.br/" passHref>
            <a target="_blank" rel="noopener noreferrer" type='link button'>
              <img
                loading="lazy"
                src={Id360}
                alt="ID360 New Media"
                width={50}
                height={'100%'}
              />
            </a>
          </Link>
        </Container>
      </BoxDescription>
    </Section>
  );
};

export default Footer;

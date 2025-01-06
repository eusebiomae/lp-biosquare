import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import Text from '../Text';

import {
Container,
Content,
Footer,
Header,
Main,
} from './styles';
import { LanguageContext } from '../LanguageContext/LanguageContext';
import { dataLanguagesEnPt, dataLanguagesPtEn } from '../Languages/Languages';

interface ModalProps {
open: boolean;
onClose: () => void;
}

const ModalTerm: React.FC<ModalProps> = ({ onClose, open }) => {
  if (!open) {
  return <></>;
  }

  const languageContext  = useContext(LanguageContext);

  const translations = languageContext?.language === 'pt-BR' ? dataLanguagesPtEn : dataLanguagesEnPt

  const handleLanguage = (languageCode: string) => {
    languageContext?.setLanguage(languageCode);
  };

  return (
  <Container>
    <Content>
      <Header>
        <Text variant="span30" color={'#21312B'}>{translations.ModalTerms.header} </Text>

        <a onClick={onClose} type='click button fechar'>
          <FiX />
        </a>
      </Header>

      <Main>
        <strong>{translations.ModalTerms.scope}</strong>
        <p style={{marginTop: '25px', marginBottom: '10px',}}>
          {translations.ModalTerms.scopeText1}
        </p>
        <p style={{marginBottom: '10px',}}>
          {translations.ModalTerms.scopeText2} <a href="https://gd8.com.br" target='_blank'> https://gd8.com.br</a>  {translations.ModalTerms.scopeText2Site}
        </p>
        <p style={{marginBottom: '10px',}}>
          {translations.ModalTerms.scopeText3}
        </p>
        <p style={{marginBottom: '30px',}}>
          {translations.ModalTerms.scopeText4}
        </p>

        <strong>{translations.ModalTerms.personalData} </strong>
        <p style={{marginTop: '10px', marginBottom: '10px', textDecoration: 'underline'}}>
          <strong>{translations.ModalTerms.personalDataText1}</strong>
        </p>
        <p style={{marginBottom: '10px',}}>
          {translations.ModalTerms.personalDataText2}
        </p>
        <p>
        {translations.ModalTerms.personalDataText3}
        </p>

        <p style={{marginTop: '10px', marginBottom: '10px', textDecoration: 'underline'}}>
          <strong>{translations.ModalTerms.personalDataText4} </strong>
        </p>
        <p>
          {translations.ModalTerms.personalDataText5}
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataLi1Strong}</strong> {translations.ModalTerms.personalDataLi1}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataLi2Strong}</strong> {translations.ModalTerms.personalDataLi2}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataLi3Strong}</strong> {translations.ModalTerms.personalDataLi3}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataLi4Strong}</strong> {translations.ModalTerms.personalDataLi4}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi5}<strong>{translations.ModalTerms.personalDataLi5Strong} </strong></li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataLi6Strong}</strong> {translations.ModalTerms.personalDataLi6}</li>
        </ul>

        <p style={{marginTop: '10px'}}>
          {translations.ModalTerms.personalDataText6}
        </p>
        <p style={{marginTop: '10px', textDecoration: 'underline'}}>
          <strong>{translations.ModalTerms.personalDataText7} </strong>
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi7} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi8} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi9}  </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi10}  </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi11} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>
            {translations.ModalTerms.personalDataLi12}
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi12a1}</li>
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi12a2} </li>
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi12a3}</li>
          </li>
        </ul>

        <p style={{marginTop: '10px', textDecoration: 'underline'}}>
          <strong>{translations.ModalTerms.personalDataText8} </strong>
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi13}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi14}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi15}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi16} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>
            {translations.ModalTerms.personalDataLi17}
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi17a1}  </li>
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi17a2}  </li>
              <li style={{ marginTop: '10px', marginLeft: '25px', listStyle: 'circle'}}>{translations.ModalTerms.personalDataLi17a3} </li>
          </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi18}</li>
        </ul>

        <p style={{marginTop: '20px'}}>
        {translations.ModalTerms.personalDataText9}
        </p>
        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', marginBottom: '30px', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi19} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi20} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi21} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi22}  </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataLi23}</li>
        </ul>

        <strong>{translations.ModalTerms.personalDataUse}  </strong>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataUseText1}
        </p>
        <p style={{marginTop: '10px', marginBottom: '30px'}}>
          {translations.ModalTerms.personalDataUseText2}
        </p>

        <strong>{translations.ModalTerms.personalDataSharing}   </strong>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataSharingText1}
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}><strong>{translations.ModalTerms.personalDataSharingLi1Strong}</strong> {translations.ModalTerms.personalDataSharingLi1}</li>
          <li style={{ marginTop: '10px', marginLeft: '25px', marginBottom: '30px'}}><strong>{translations.ModalTerms.personalDataSharingLi2Strong}</strong> {translations.ModalTerms.personalDataSharingLi2}</li>
        </ul>

        <strong>{translations.ModalTerms.personalDataStorage} </strong>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataStorageText1}
        </p>
        <p style={{marginTop: '10px', marginBottom: '30px'}}>
          {translations.ModalTerms.personalDataStorageText2}
        </p>

        <strong>{translations.ModalTerms.personalDataUsageCookies}</strong>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataUsageCookiesText1}
        </p>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataUsageCookiesText2}.
        </p>

        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataUsageCookiesText3}
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', marginBottom: '30px', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}> <strong>{translations.ModalTerms.personalDataUsageCookiesLi1Strong} </strong>{translations.ModalTerms.personalDataUsageCookiesLi1} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}> <strong>{translations.ModalTerms.personalDataUsageCookiesLi2Strong} </strong>{translations.ModalTerms.personalDataUsageCookiesLi2} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}> <strong>{translations.ModalTerms.personalDataUsageCookiesLi3Strong} </strong>{translations.ModalTerms.personalDataUsageCookiesLi3} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}> <strong>{translations.ModalTerms.personalDataUsageCookiesLi4Strong} </strong>{translations.ModalTerms.personalDataUsageCookiesLi4} </li>
        </ul>

        <p style={{marginTop: '10px', marginBottom: '30px',}}>
          {translations.ModalTerms.personalDataUsageCookiesText4} <strong> {translations.ModalTerms.personalDataUsageCookiesText4Strong}</strong> {translations.ModalTerms.personalDataUsageCookiesText4a2}
        </p>

        <strong>{translations.ModalTerms.personalDataRights}</strong>
        <p style={{marginTop: '10px',}}>
          {translations.ModalTerms.personalDataRightsText1}
        </p>

        <ul style={{ listStyle: 'disc', listStylePosition: 'outside', marginBottom: '30px', }}>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi1} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi2} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi3} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi4} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi5} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi6} </li>
          <li style={{ marginTop: '10px', marginLeft: '25px'}}>{translations.ModalTerms.personalDataRightsLi7} </li>
        </ul>

        <p style={{marginTop: '10px', marginBottom: '30px',}}>
          {translations.ModalTerms.personalDataRightsText2}
        </p>

        <strong>{translations.ModalTerms.personalDataUpdate} </strong>
        <p style={{marginTop: '10px', marginBottom: '30px',}}>
          {translations.ModalTerms.personalDataUpdateText1}
        </p>
        <p style={{marginTop: '10px', marginBottom: '30px',}}>
          <strong>{translations.ModalTerms.personalDataUpdateText2}</strong>
        </p>

        <strong>{translations.ModalTerms.personalDataContact} </strong>
        <p style={{marginTop: '10px', marginBottom: '30px',}}>
          {translations.ModalTerms.personalDataContactText1} <a href="mailto:atendimento@gd8.com.br">atendimento@gd8.com.br</a>
        </p>

      </Main>

      <Footer>
        <a onClick={onClose} type='click button fechar'>Fechar</a>
      </Footer>
    </Content>
  </Container>
  );
  };

  export default ModalTerm;

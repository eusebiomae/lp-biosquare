import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { ProviderProps, VisitProps } from './@types';
import {
  getUser,
  getVisit,
  setHubId,
  setVisit,
} from './cookies';
import sendEvents from './mutate/sendEvent';
import { getCampaign } from './queries';
import { LanguageProvider } from '../components/LanguageContext/LanguageContext';

const ProviderHubId: React.FC<ProviderProps> = ({
  googleAnalytics,
  googleTagManager,
  hubid,
  children,
  loading,
}) => {
  const [loadingIP, setLoadingIP] = useState(true);
  // const [loadingUser, setLoadingUser] = useState(true);
  const [visitData, setVisitData] = useState<VisitProps | any>(
    {},
  );

  useEffect(() => {
    // Enviando HUBID para os cookies
    setHubId(hubid);

    // Inicializando o GTAG
    if (googleAnalytics) {
      ReactGA.initialize(googleAnalytics);
      ReactGA.pageview(googleAnalytics);
    }

    // Inicializando o GTM
    if (googleTagManager) {
      TagManager.initialize({ gtmId: googleTagManager });
    }

    // Capurando Client ID do Google Analytics
    ReactGA.ga((tracker: any) =>
      setVisitData((data: VisitProps) => ({
        ...data,
        ga_clientid: tracker?.get('clientId'),
      })),
    );

    // Capturando IP do usuário
    const getIP = async () => {
      try {
        await axios.get(`/api/ip`).then(resp =>
          setVisitData((data: any) => ({
            ...data,
            ip: resp.data.ip,
          })),
        );
      } catch (error) {
      } finally {
        setLoadingIP(false);
      }
    };
    getIP();

    // Criando dados da visita
    setVisitData((data: VisitProps) => ({
      ...data,
      referrer: document.referrer,
      page: document.location.pathname,
      user_agent: navigator.userAgent,
      gclid: getCampaign('gclid'),
      fbclid: getCampaign('fbclid'),
      utm_source: getCampaign('utm_source'),
      resolution: window.outerWidth + 'x' + window.outerHeight,
      date: dayjs().format('DD-MM-YYYY HH:mm:ss'),
    }));
  }, []);

  if (loadingIP) {
    return loading;
  }

  // Caso seja a primeira visita no site
  if (!getVisit()) {
    sendEvents({
      type: 'visit',
      data: visitData,
      user_id: null,
    });
  } else {
    sendEvents({
      type: 'pageview',
      data: visitData,
      user_id: +getUser()!,
    });
  }

  // Envia os dados da visita para os cookies
  setVisit(visitData);

  return <LanguageProvider>{children}</LanguageProvider>;
};

export default ProviderHubId;

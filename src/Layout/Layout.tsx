import React, { ReactNode, useEffect, useState } from 'react';
import { Footer, Navigation } from '../components';
import Head from 'next/head';
import theme from '../theme';

interface LayoutProps {
  children: ReactNode;
}

const fonts = [
  {
    key: 'Dilemma',
    url: '/fonts/Dilemma/font-family-dilemma.css',
  },
  {
    key: 'Nexa',
    url: '/fonts/Nexa/font-family-nexa.css',
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    // Desabilitando SSR
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return <></>;
  }

  const schema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "LocalHost",
    "url": "http://localhost:8080/",
    "description": ""
  };

  return (
    <html lang="pt-br">

    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <title>Lojas comerciais à venda em Pinheiros | BIOSQUARE</title>

      {/* ======================================= */}
      {/* METAS */}
      {/* ======================================= */}
      <meta name="title" content="Lojas comerciais à venda em Pinheiros | BIOSQUARE" />
      <meta name="description" content="Conheça nossas lajes de até 2 mil m². Empreendimento com 18 pavimentos corporativos, rooftop e vista. A 8 passos do metrô Fradique Coutinho." />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="theme-color" content={theme.colors.black} />
      <meta name="msapplication-TileColor" content={theme.colors.black} />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

      {/* ======================================= */}
      {/* FAVICONS */}
      {/* ======================================= */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="shortcut icon" href="/favicons/favicon.ico" />

      {/* ======================================= */}
      {/* FONTS */}
      {/* ======================================= */}
      {fonts.map(font => (
        <link key={font.key} rel="stylesheet" href={font.url} />
      ))}
    </Head>
    <body>
      <Navigation />

      {children}

      <Footer />
    </body>
    </html>
  );
};

export default Layout;

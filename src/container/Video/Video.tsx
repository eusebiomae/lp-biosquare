import React, { useState, useContext } from 'react';
import { FiPlay } from 'react-icons/fi';
import { useWindowSize } from '../../providers';
import { BoxVideo } from './styles';
import { QVazado, QVazadoMob } from '../../assets/icons';
import { LanguageContext } from '../../components/LanguageContext/LanguageContext';

const Video: React.FC = () => {
  const { isDesktop } = useWindowSize();
  const [videoStarted, setVideoStarted] = useState(false);

  const languageContext = useContext(LanguageContext);
  const currentLanguage = languageContext?.language;

  const onPlay = () => {
    setVideoStarted(true);
  };

  // Defina o link do vídeo com base no idioma
  const videoSrc = currentLanguage === 'pt-BR'
    ? "https://www.youtube.com/embed/sl38z-WyRAI/?&autoplay=1"
    : "https://www.youtube.com/embed/gPEb0d4wd6U/?&autoplay=1";

  return (
    <section data-header="video">
      <BoxVideo>
        {isDesktop ? (
          <img
            src={QVazado}
            alt="Imagem Q Vazado"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        ) : (
          <img
            src={QVazadoMob}
            alt="Imagem Q Vazado Mobile"
            data-aos="fade-up"
            data-aos-duration="1500"
          />
        )}

        {videoStarted && (
          <iframe
            width="100%"
            height={isDesktop ? '100%' : '210px'}
            src={videoSrc}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        {!videoStarted && (
          <button
            onClick={onPlay}
            data-aos="fade-up"
            data-aos-duration="1500"
            aria-label="Button Play"
          >
            <div>
              <FiPlay />
            </div>
          </button>
        )}
      </BoxVideo>
    </section>
  );
};

export default Video;

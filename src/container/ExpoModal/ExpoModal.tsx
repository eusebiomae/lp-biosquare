import React from 'react';
import { Box } from './styles';
import { logoBiosquareModal } from '../../assets/modal';

interface ExpoModalProps {
  title: string;
}

const ExpoModal: React.FC<ExpoModalProps> = () => {

  return (
    <>
      <Box>
        <img loading="lazy" src={logoBiosquareModal} alt="Logo Biohaus do Modal" />
      </Box>
    </>
  );
};

export default ExpoModal;

import React, { ReactNode, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { useWindowSize } from '../../providers';
import {
  BoxExpo,
  ButtonClose,
  Container,
  Content,
} from './styles';
import { logo } from '../../assets/header/logo-biosquare.svg';

interface ModalProps {
  open: boolean;
  children: ReactNode;
  expo: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  open,
  children,
  expo,
  onClose,
}) => {
  const { isDesktop } = useWindowSize();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'visible';
  }, [open]);

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!open) {
    return <></>;
  }

  return (
    <Container data-aos="zoom-out" data-aos-duration="500">
      <ButtonClose
        onClick={onClose}
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <FiX />
      </ButtonClose>

      {isDesktop && <BoxExpo>{expo}</BoxExpo>}

      <Content>
        {!isDesktop &&
          <img src={logo} alt="Logo Biosquare do Modal" />
        }

        {children}
      </Content>
    </Container>
  );
};

export default Modal;

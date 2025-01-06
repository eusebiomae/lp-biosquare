import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

interface ImageMagnifierProps {
  src: string;
  alt: string;
}

const Container = styled.div`
  cursor: none;
  display: inline-block;
  overflow: hidden;
  position: relative;
`;

const MagnifierWrapper = styled.div`
  position: absolute;
  background-color: ${theme.colors.white};
  border-radius: 50%;
`;

const MagnifierGlass = styled.div`
  border: 2px solid #ccc;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px rgba(135, 135, 135, 1);
  box-sizing: border-box;
  height: 150px;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  width: 150px;
  z-index: 999;
`;

const CustomCursor = styled.div`
  background-color: transparent;
  border-radius: 50%;
  height: 16px;
  position: absolute;
  transform: translate(-50%, -50%);
  width: 16px;
`;

const MagnifiedImage = styled.div<{ x: number; y: number; backgroundImage: string }>`
  background-size: 900%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: ${(props) => `${props.x}% ${props.y}%`};
  background-repeat: no-repeat;
  height: 110%;
  transform-origin: top left;
  width: 110%;
`;

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src, alt }) => {
  // Estado para armazenar a posição do cursor
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 });

  // Referência ao container principal
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Efeito para adicionar um event listener para o movimento do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Lógica para calcular a posição relativa do cursor em relação ao container
      const container = containerRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width * 100;
      const y = (e.clientY - top) / height * 100;

      // Atualiza o estado com a nova posição do cursor
      setCursorPosition({ x, y });
    };

    // Adiciona o event listener ao movimento do mouse
    document.addEventListener('mousemove', handleMouseMove);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Renderiza o componente com a imagem, a lupa e a imagem ampliada
  return (
    <Container ref={containerRef}>
      <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <MagnifierWrapper
        style={{
          left: `calc(${cursorPosition.x}% - 75px)`,
          top: `calc(${cursorPosition.y}% - 75px)`,
        }}
      >
        <MagnifierGlass>
          <CustomCursor style={{ left: '50%', top: '50%' }} />
          <MagnifiedImage x={cursorPosition.x} y={cursorPosition.y} backgroundImage={src} />
        </MagnifierGlass>
      </MagnifierWrapper>
    </Container>
  );
};

export default ImageMagnifier;

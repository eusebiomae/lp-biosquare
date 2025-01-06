import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperSlide } from 'swiper/react';
import { useWindowSize } from '../../providers';
import { BtnMaximize, Slides, SwiperReact } from './styles';
import Lightbox from '../Lightbox/Lightbox';
import { FiMaximize, FiMaximize2 } from 'react-icons/fi';

interface SwiperProps {
  data: any[];
  navigation?: boolean;
  pagination?: boolean;
}

const Swiper: React.FC<SwiperProps> = ({
  data,
  navigation = true,
  pagination = true,
}) => {
  const { isDesktop } = useWindowSize();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [openGallery, setOpenGallery] = useState(false);

  const handleGallery = (id: number) => {
    setSelectedImageIndex(id);
    setOpenGallery(true);
  };

  return (
    <SwiperReact
      slidesPerView={1}
      navigation={navigation}
      pagination={
        !isDesktop && { dynamicBullets: true }
      }
      modules={[Navigation, Pagination]}
      autoHeight
    >
      {data.map((item, index) => (
        <SwiperSlide>

          <Slides key={item.id}
            onClick={() => handleGallery(index)}
          >
            <img src={item.img}
              alt={`Imagem ${index}`}
              data-index={index}
            />

            <span>{item.description}</span>
            <p style={isDesktop ? { position: 'absolute', bottom: '-60px', left: '7px',  fontSize: '12px',} : {position: 'absolute', bottom: '-25px', left: '8px', fontSize: '10px', lineHeight: '14px'}}>{item.footnote}</p>

            <BtnMaximize onClick={() => handleGallery(index)} aria-label='Button Maximize'>
              <FiMaximize2 />
            </BtnMaximize>
          </Slides>
        </SwiperSlide>
      ))}

      <Lightbox
        open={openGallery}
        selectedIndex={selectedImageIndex}
        images={data}
        onClose={() => setOpenGallery(false)}
      />

    </SwiperReact>
  );
};

export default Swiper;

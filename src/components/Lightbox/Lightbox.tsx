import React, { useEffect, useState } from 'react';
import LightboxReact from 'react-image-lightbox';

interface LightboxProps {
  open: boolean;
  images: any[];
  selectedIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  open,
  selectedIndex,
  onClose,
}) => {
  const [dataGallery, setDataGallery] = useState<string[]>(images);
  const [descriptionGallery, setDescriptionGallery] = useState<string[]>(images);
  const [currentGallery, setCurrentGallery] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataGallery(images.map(item => item.img));
      setDescriptionGallery(images.map(item => item.description));
      setCurrentGallery(selectedIndex);
    }, 100);
  }, [images,open,selectedIndex]);

  if (open) {
    return (
      <LightboxReact
        mainSrc={dataGallery[currentGallery]}
        imageCaption={descriptionGallery[currentGallery]}
        nextSrc={
          dataGallery[(currentGallery + 1) % dataGallery.length]
        }
        prevSrc={
          dataGallery[
            (currentGallery + dataGallery.length - 1) %
              dataGallery.length
          ]
        }
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          setCurrentGallery(
            (currentGallery + dataGallery.length - 1) %
              dataGallery.length,
          )
        }
        onMoveNextRequest={() =>
          setCurrentGallery(
            (currentGallery + 1) % dataGallery.length,
          )
        }
      />
    );
  }

  return <></>;
};

export default Lightbox;

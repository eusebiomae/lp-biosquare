import { useEffect, useState } from 'react';

interface SizeProps {
  height: number;
  width: number;
  isDesktop: boolean;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    height: 0,
    width: 0,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width:
          typeof window !== 'undefined' ? window.innerWidth : 0,
        height:
          typeof window !== 'undefined' ? window.innerHeight : 0,
        isDesktop:
          typeof window !== 'undefined'
            ? window.innerWidth >= 1239
            : false,
      });
    };

    typeof window !== 'undefined' &&
      window.addEventListener('resize', handleResize);

    handleResize();

    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

import React from 'react';
import theme from '../../theme';

interface BrandProps {
  color?: string;
}

const Brand: React.FC<BrandProps> = ({
  color = theme.colors.green,
}) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.518799 0.514404V5.75301H16.2408V21.4849H21.4812V0.523047H21.4707V0.514404H0.518799Z"
        fill={color}
      />
      <path
        d="M8.37541 8.38049H0.523682V13.6191H8.37541V21.4856H13.6227V8.38049H8.37541Z"
        fill={color}
      />
      <path
        d="M0.52002 21.4852H5.75924V16.2429H0.52002V21.4852Z"
        fill={color}
      />
    </svg>
  );
};

export default Brand;

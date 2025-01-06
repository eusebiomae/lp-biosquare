import React, { useState } from 'react';
import Box from '../Box';
import { BoxButton, BoxContent } from './styles';

interface ButtonWithFlagProps {
  flagText: string;
  text: string;
  flagColor: string;
  buttonText: string;
  icon: string;
  isActive: boolean;
  isButtonDisabled: boolean;
  onClick: () => void;
  onDeactivate: () => void;
}

const ButtonWithFlag: React.FC<ButtonWithFlagProps> = ({
  flagText,
  text,
  flagColor,
  buttonText,
  icon,
  isActive,
  isButtonDisabled,
  onClick,
  onDeactivate,
}) => {
  return (
    <BoxButton>
      {text}
      {isActive ? (
        <div
          style={{ color: flagColor, cursor: 'pointer' }}
          onClick={onDeactivate}
        >
          {icon && <img src={icon} alt="Ícone" />}
          {flagText}
        </div>
      ) : null}
      <button onClick={onClick} disabled={isButtonDisabled}>
        {buttonText}
      </button>
    </BoxButton>
  );
};

export default ButtonWithFlag;

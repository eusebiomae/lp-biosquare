import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export interface BtnProps extends SpaceProps {
  size: 'full' | 'xsmall' |'small' | 'medium' | 'large';
  color?: 'greenDark' | 'yellow' | 'transparent';
}

const sizes = {
  full: '100%',
  xsmall: '190px',
  small: '270px',
  medium: '290px',
  large: '370px',
};

const variant = {
  yellow: css`
    background-color: ${theme.colors.green};
    border: 1px solid ${theme.colors.yellow};
    color: ${theme.colors.yellow};

    &:hover {
      background-color: ${theme.colors.yellow};
      border: 1px solid ${theme.colors.green};
      color: ${theme.colors.green};
    }
  `,
  greenDark: css`
    background-color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    color: ${theme.colors.white};
  `,
  transparent: css`
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    color: ${theme.colors.green};
  `,
};

export const Btn = styled.button<BtnProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 12px;
  height: 52px;
  margin-inline: auto;
  padding: 14px;
  text-transform: none;
  transition: 0.2s ease-in-out;
  max-width: ${({ size }) => sizes[size]};
  width: 100%;
  ${space}

  ${theme.typography.button}

  img {
    height: 20px;
    width: 20px;
  }

  ${switchProp(prop('color', 'yellow'), {
    yellow: variant.yellow,
    greenDark: variant.greenDark,
    transparent: variant.transparent,
  })}
`;

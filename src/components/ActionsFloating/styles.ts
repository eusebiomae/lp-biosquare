import styled from 'styled-components';
import theme from '../../theme';
import Text from '../Text';

export const Floating = styled.div`
  align-items: flex-end;
  bottom: 125px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 56px;
  padding: 3px;
  position: fixed;
  right: 0;
  transform: translateY(50%);
  width: 56px;
  z-index: 2;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    align-items: center;
    bottom: 90px;
    max-width: initial;
    padding-inline: 20px;
    right: 0;
    transform: translateY(0);
    margin-right: 15px;
    /* margin-bottom: 153px; */
  }
`;

export const Btn = styled.button`
  align-items: center;
  background-color: ${theme.colors.brown};
  border-radius: 50px;
  display: flex;
  justify-content: flex-end;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before {
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.3s ease;
    border-radius: 50%;
    bottom: -3px;
    border: 1px dashed #BFA66B;
    content: '';
    left: -3px;
    position: absolute;
    right: -3px;
    top: -3px;
    animation: rotate 10s linear infinite;
  }

  &:hover {
    transition: all 0.3s ease-in-out;

    &:before {
      border: 1px solid ${theme.colors.white};
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      animation: none;
    }

  }
`;

export const BoxText = styled(Text)`
  color: ${theme.colors.white};
  overflow: hidden;
  padding: 0;
  transition: 0.4s ease-in-out;
  width: 0;
  white-space: nowrap;
`;

export const BoxIcon = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: center;
  width: 70px;

  img {
    width: 36px;
  }
`;

import styled from 'styled-components';
import theme from '../../theme';

export const Box = styled.div`
  align-items: flex-start;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 508px;
  justify-content: center;
  width: 260px;
  margin-left: 180px;

  & > img {
    z-index: 1;
  }

  & > p {
    align-items: center;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.yellow};
    color: ${theme.colors.yellow};
    display: inline-flex;
    gap: 10px;
    justify-content: center;
    padding: 6px 12px;
    z-index: 1;
  }
`;

export const BoxImage = styled.div`
  left: 0;
  position: absolute;
`;

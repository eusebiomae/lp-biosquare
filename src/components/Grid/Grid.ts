import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  margin-inline: auto;
  max-width: 1170px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 20px;
  }
`;

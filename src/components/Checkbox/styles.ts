import styled from 'styled-components';
import theme from '../../theme';

export const Label = styled.label`
  ${theme.typography.legend}
  color: ${theme.colors.black};
  display: flex;
  gap: 8px;
  font-family: 'Nexa';
  font-size: 13;
  font-weight: 400;
  line-height: 5px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    line-height: 22px;
  }

  a {
    ${theme.typography.legend}
    background-color: transparent;
    color: ${theme.colors.black};
    cursor: pointer;
    font-weight: 700;

    :hover {
      text-decoration: underline;
    }
  }
`;

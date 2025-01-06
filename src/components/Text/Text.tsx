import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export type TextProps = ColorProps &
  WidthProps &
  SpaceProps &
  TypographyProps & {
    variant?:
      | 'body'
      | 'big'
      | 'nav'
      | 'navButton'
      | 'span'
      | 'button'
      | 'map'
      | 'legend'
      | 'legendCorte'
      | 'span30'
      | 'span22'
      | 'span15'
      | 'h1Desktop'
      | 'h2Desktop'
      | 'h2Mobile'
      | 'h3Desktop'
      | 'Footer'
      | 'h2Idealization'
      | 'textIdealization'
      | 'carouselTechnicalTitle';
    uppercase?: boolean;
  };

const Text = styled.p<TextProps>`
  ${switchProp(prop('variant', 'body'), {
    body: theme.typography.body,
    big: theme.typography.big,
    nav: theme.typography.nav,
    navButton: theme.typography.navButton,
    span: theme.typography.span,
    button: theme.typography.button,
    map: theme.typography.map,
    legend: theme.typography.legend,
    legendCorte: theme.typography.legendCorte,
    span30: theme.typography.span30,
    span22: theme.typography.span22,
    span15: theme.typography.span15,
    h1Desktop: theme.typography.h1Desktop,
    h2Desktop: theme.typography.h2Desktop,
    h2Mobile: theme.typography.h2Mobile,
    h3Desktop: theme.typography.h3Desktop,
    Footer: theme.typography.Footer,
    h2Idealization: theme.typography.h2Idealization,
    textIdealization: theme.typography.textIdealization,
    carouselTechnicalTitle: theme.typography.carouselTechnicalTitle,
  })}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${color}
  ${width}
  ${space}
  ${typography}
`;

Text.displayName = 'Text';

export default Text;

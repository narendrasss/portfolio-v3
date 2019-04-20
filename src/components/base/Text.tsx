import styled from 'styled-components';
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  FontFamilyProps,
  FontWeightProps as BaseFontWeightProps,
  TextAlignProps,
  LineHeightProps,
} from 'styled-system';
import Box, { BoxProps } from './Box';

interface FontWeightProps {
  fontWeight?: BaseFontWeightProps | 'bold' | 'semibold' | 'light' | 'regular';
}

export interface TextProps
  extends BoxProps,
    FontFamilyProps,
    FontWeightProps,
    TextAlignProps,
    LineHeightProps {}

export const BaseText = styled(Box).attrs(() => ({ as: 'p' }))<TextProps>`
  ${fontFamily}
  ${fontWeight}
  ${textAlign}
  ${lineHeight}
`;

export const Text = styled(BaseText).attrs(() => ({
  fontFamily: 'sans',
  fontSize: [0, 1],
}))<TextProps>``;

export const Mono = styled(BaseText).attrs(() => ({
  fontFamily: 'mono',
}))<TextProps>``;

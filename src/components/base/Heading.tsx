import styled from 'styled-components';
import { Text, TextProps } from './Text';

export const Heading = styled(Text).attrs(() => ({
  as: 'h1',
  fontSize: 2,
  fontWeight: 'semibold',
}))<TextProps>``;

import styled from 'styled-components';
import {
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  FlexDirectionProps,
  FlexWrapProps,
  AlignItemsProps,
  JustifyContentProps,
} from 'styled-system';
import Box, { BoxProps } from './Box';

export interface FlexProps
  extends BoxProps,
    FlexDirectionProps,
    FlexWrapProps,
    AlignItemsProps,
    JustifyContentProps {}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexDirection}
  ${flexWrap}
  ${alignItems}
  ${justifyContent}
`;

export default Flex;

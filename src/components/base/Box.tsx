import styled from 'styled-components';
import {
  space,
  width,
  color,
  flex,
  order,
  alignSelf,
  fontSize,
  FontSizeProps,
  SpaceProps,
  WidthProps,
  ColorProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    WidthProps,
    ColorProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    FontSizeProps {
  height?: string;
}

const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${fontSize}
  ${({ height }) => height && `height: ${height};`}
`;

export default Box;

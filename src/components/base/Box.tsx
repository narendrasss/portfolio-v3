import styled from 'styled-components';
import {
  style,
  space,
  width,
  color,
  flex,
  order,
  position,
  top,
  left,
  bottom,
  right,
  alignSelf,
  fontSize,
  FontSizeProps,
  SpaceProps,
  WidthProps,
  ColorProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  PositionProps,
  TopProps,
  LeftProps,
  BottomProps,
  RightProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    WidthProps,
    ColorProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    FontSizeProps,
    PositionProps,
    TopProps,
    LeftProps,
    BottomProps,
    RightProps {
  height?: string;
  display?: string | number[];
}

const height = style({
  prop: 'height',
  key: 'heights',
});

const display = style({
  prop: 'display',
  key: 'displays',
});

const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${color}
  ${flex}
  ${order}
  ${alignSelf}
  ${fontSize}
  ${height}
  ${display}
  ${position}
  ${top}
  ${left}
  ${bottom}
  ${right}
`;

export default Box;

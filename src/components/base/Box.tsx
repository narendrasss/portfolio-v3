import styled from 'styled-components';
import { display, DisplayProps } from 'styled-system';
import { Box as BaseBox, BoxProps as BaseBoxProps } from 'rebass';

export interface BoxProps extends BaseBoxProps, DisplayProps {}

const Box = styled(BaseBox)`
  ${display}
` as React.FC<BoxProps>;

export default Box;

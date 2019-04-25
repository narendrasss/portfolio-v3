import React from 'react';
import { Flex, FlexProps } from 'rebass';
import styled from 'styled-components';

export { FlexProps as MainProps } from 'rebass';

const Container = styled(Flex)`
  width: 100vw;
  min-height: 100vh;
` as React.FC<FlexProps>;

const Main: React.FC<FlexProps> = props => (
  <Container as="main" flexDirection="column" {...props} />
);

export default Main;

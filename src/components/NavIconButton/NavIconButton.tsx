import React from 'react';
import Button, { ButtonProps } from '../base/Button';
import styled from 'styled-components';

const Container = styled(Button)`
  width: 16px;
  height: 16px;
  background: black;
` as React.FC<ButtonProps>;

const NavIconButton: React.FC<ButtonProps> = props => (
  <Container data-testid="button" {...props} />
);

export default NavIconButton;

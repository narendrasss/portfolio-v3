import React from 'react';
import Button, { ButtonProps } from '../base/Button';
import styled from 'styled-components';
import Box from '../base/Box';

const Container = styled(Button)`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
` as React.FC<ButtonProps>;

const OpenContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-end;
` as React.FC<ButtonProps>;

const CloseContainer = styled(Container)`
  height: 4.5rem;
` as React.FC<ButtonProps>;

const Slice = styled(Box)`
  height: 3px;
  background: black;
`;

const Cross = styled(Slice)`
  position: absolute;
  background: white;
  transform: rotate(45deg);
  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

interface NavButtonProps extends ButtonProps {
  isOpen?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ isOpen, ...props }) =>
  isOpen ? (
    <CloseContainer
      data-testid="button-close"
      m={1}
      mt="4rem"
      width="4.5rem"
      {...props}
    >
      <Cross width="4.5rem" />
      <Cross width="4.5rem" />
    </CloseContainer>
  ) : (
    <OpenContainer
      data-testid="button-open"
      m={1}
      mt="4rem"
      width="4.5rem"
      {...props}
    >
      <Slice width="4.5rem" mb="1rem" />
      <Slice width="3.6rem" mb="1rem" />
      <Slice width="2.25rem" />
    </OpenContainer>
  );

export default NavButton;

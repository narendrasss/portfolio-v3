import React from 'react';
import Box, { BoxProps } from './Box';

export interface ButtonProps extends BoxProps {
  onClick: React.ChangeEventHandler<HTMLButtonElement>;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', ...props }) => (
  <Box as="button" data-testid="button" type={type} {...props} />
);

export default Button;

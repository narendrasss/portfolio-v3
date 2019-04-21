import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'gatsby';
import { TextProps } from 'rebass';
import { Text } from './Text';

export interface LinkProps extends TextProps {
  to: string;
}

const BaseLink: React.FC<TextProps> = ({ color = 'black', ...props }) => (
  <Text as={RouterLink} color={color} {...props} />
);

const Link = styled(BaseLink)`
  text-decoration: none;
` as React.FC<LinkProps>;

export default Link;

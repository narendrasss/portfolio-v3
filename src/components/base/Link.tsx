import styled from 'styled-components';
import { Link as BaseLink } from 'gatsby';
import { Text, TextProps } from './Text';

export interface LinkProps extends TextProps {
  to: string;
}

const Link = styled(Text).attrs((props: LinkProps) => ({
  as: BaseLink,
  color: props.color ? props.color : 'black',
  to: props.to,
}))<LinkProps>`
  text-decoration: none;
`;

export default Link;

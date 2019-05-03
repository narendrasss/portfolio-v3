import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import Domain from '../Domain/Domain';
import List from '../base/List';
import Link from '../base/Link';
import Box from '../base/Box';

export interface HeaderProps {
  url: string;
  links: LinkTo[];
}

const Container = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
`;

const Header: React.FC<HeaderProps> = ({ url, links }) => {
  return (
    <Container as="header" m={1}>
      <Domain url={url} />
      <Box as="nav" display={['none', 'block']}>
        <List items={links}>
          {({ name, url }) => (
            <Link key={[name, url].join()} to={url}>
              {name}
            </Link>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default Header;

import React from 'react';
import Flex from './base/Flex';
import { Text } from './base/Text';
import Link from './base/Link';
import Box from './base/Box';

export interface HeaderProps {
  url: string;
  links: LinkTo[];
}

const Header: React.FC<HeaderProps> = ({ url, links }) => {
  const [name, domain] = url.split('.');
  return (
    <Flex
      as="header"
      position="fixed"
      width="100%"
      m={1}
      top="0"
      left="0"
      justifyContent="space-between"
    >
      <Text fontWeight="semibold">
        {name}
        <Text as="span" fontWeight="light">
          .{domain}
        </Text>
      </Text>
      <Box display={[0, 1]}>
        {links.map(({ name: linkName, url: linkUrl }) => (
          <Link key={[linkName, linkUrl].join()} to={linkUrl}>
            {linkName}
          </Link>
        ))}
      </Box>
    </Flex>
  );
};

export default Header;

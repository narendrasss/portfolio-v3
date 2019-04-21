import React from 'react';
import Main from './Main';
import Header from './Header';
import Link from './base/Link';
import List from './base/List';

export interface NavProps {
  url: string;
  links: LinkTo[];
}

const Nav: React.FC<NavProps> = ({ url, links }) => (
  <Main as="nav" p={1} bg="black" color="white" justifyContent="center">
    <Header url={url} links={links} />
    <List items={links}>
      {({ name, url }) => (
        <Link
          key={[name, url].join()}
          to={url}
          color="white"
          fontSize={2}
          fontWeight={600}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Link>
      )}
    </List>
  </Main>
);

export default Nav;

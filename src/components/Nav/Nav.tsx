import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NavButton from '../NavButton/NavButton';
import { ContentProps } from '../Content/Content';
import List from '../base/List';
import Link from '../base/Link';

const Nav: React.FC<ContentProps> = ({
  title,
  description,
  url,
  links,
  onNavClick,
  ...props
}) => (
  <Main
    data-testid="main"
    p={1}
    bg="black"
    color="white"
    justifyContent="center"
    {...props}
  >
    <Helmet
      title={title}
      meta={[{ name: 'description', content: description }]}
    />
    <Header url={url} links={links} />
    <NavButton onClick={onNavClick} isOpen={true} display={['block', 'none']} />
    <List items={links}>
      {({ name, url }) => (
        <Link
          key={[name, url].join()}
          to={url}
          color="white"
          fontSize={3}
          fontWeight={600}
        >
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Link>
      )}
    </List>
  </Main>
);

export default Nav;

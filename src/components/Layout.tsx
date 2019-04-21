import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { FlexProps } from 'rebass';
import favicon from '../images/favicon.ico';
import { useMetadata } from '../hooks';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';

interface LayoutProps extends FlexProps {
  title?: string;
  color?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Narendra Syahrasyad',
  children,
  ...props
}) => {
  const { description, url, links } = useMetadata();
  const [isNavOpen, setIsNavOpen] = useState(true);

  if (isNavOpen) return <Nav url={url} links={links} />;
  return (
    <Main p={1} {...props}>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <Header url={url} links={links} />
      {children}
    </Main>
  );
};

export default Layout;

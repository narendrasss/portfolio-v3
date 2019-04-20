import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import { useMetadata } from '../hooks';
import Flex, { FlexProps } from './base/Flex';
import Header from './Header';

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
  return (
    <Flex
      as="main"
      height="100vh"
      width="100vw"
      flexDirection="column"
      p={1}
      {...props}
    >
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <Header url={url} links={links} />
      {children}
    </Flex>
  );
};

export default Layout;

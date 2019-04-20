import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import favicon from '../images/favicon.ico';
import { useMetadata } from '../hooks';
import Flex, { FlexProps } from './base/Flex';

interface LayoutProps extends FlexProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Narendra Syahrasyad',
  children,
  ...props
}) => {
  const { description } = useMetadata();
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
      {children}
    </Flex>
  );
};

export default Layout;

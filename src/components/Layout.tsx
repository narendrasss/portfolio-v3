import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../images/favicon.ico';
import { useMetadata } from '../hooks';
import Main from './base/Main';

interface LayoutProps {
  title?: string;
  alignItems?: string;
  justifyContent?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Narendra Syahrasyad',
  children,
  ...rest
}) => {
  const { description } = useMetadata();
  return (
    <Main {...rest}>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      {children}
    </Main>
  );
};

export default Layout;

import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { useMetadata } from '../../hooks';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main, { MainProps } from '../Main/Main';
import NavIconButton from '../NavIconButton/NavIconButton';

interface LayoutProps extends MainProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Narendra Syahrasyad',
  children,
  ...props
}) => {
  const { description, url, links } = useMetadata();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => setIsNavOpen(prev => !prev);

  if (isNavOpen) return <Nav data-testid="nav" url={url} links={links} />;
  return (
    <Main data-testid="main" p={1} {...props}>
      <Helmet
        title={title}
        meta={[{ name: 'description', content: description }]}
      />
      <NavIconButton data-testid="nav-button" onClick={handleClick} />
      <Header url={url} links={links} />
      {children}
    </Main>
  );
};

export default Layout;

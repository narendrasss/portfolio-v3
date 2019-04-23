import React, { useState } from 'react';
import { useMetadata } from '../../hooks';
import { MainProps } from '../Main/Main';
import Nav from '../Nav/Nav';
import Content from '../Content/Content';
import '../../main.css';

interface LayoutProps extends MainProps {
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Narendra Syahrasyad',
  ...rest
}) => {
  const { description, url, links } = useMetadata();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleClick = () => setIsNavOpen(prev => !prev);

  const props = {
    description,
    links,
    title,
    url,
    onNavClick: handleClick,
  };

  if (isNavOpen) return <Nav data-testid="nav" {...props} {...rest} />;
  return <Content data-testid="content" {...props} {...rest} />;
};

export default Layout;

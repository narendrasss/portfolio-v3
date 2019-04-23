import React from 'react';
import Helmet from 'react-helmet';
import Header from '../Header/Header';
import Main, { MainProps } from '../Main/Main';
import NavButton from '../NavButton/NavButton';

export interface ContentProps extends MainProps, SiteMetadata {
  title: string;
  onNavClick: React.ChangeEventHandler<HTMLButtonElement>;
}

const Content: React.FC<ContentProps> = ({
  title,
  description,
  url,
  links,
  children,
  onNavClick,
  ...props
}) => (
  <Main data-testid="main" p={1} {...props}>
    <Helmet
      title={title}
      meta={[{ name: 'description', content: description }]}
    />
    <Header url={url} links={links} />
    <NavButton
      data-testid="nav-button"
      onClick={onNavClick}
      display={['block', 'none']}
    />
    {children}
  </Main>
);

export default Content;

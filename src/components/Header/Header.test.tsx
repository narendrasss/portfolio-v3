import React from 'react';
import { render } from 'react-testing-library';
import Header from './Header';

describe('Header', () => {
  const url = 'narendras.io';
  const links = [
    {
      name: 'about',
      url: '/about',
    },
    {
      name: 'blog',
      url: '/blog',
    },
  ];
  const component = <Header url={url} links={links} />;

  it('renders without crashing', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all links correctly', () => {
    const { queryByText } = render(component);
    links.forEach(({ name }) => {
      expect(queryByText(name)).toBeTruthy();
    });
  });
});

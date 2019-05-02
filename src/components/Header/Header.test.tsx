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

  it('renders all links correctly', () => {
    const { queryByText } = render(<Header url={url} links={links} />);
    links.forEach(({ name }) => {
      expect(queryByText(name)).toBeTruthy();
    });
  });
});

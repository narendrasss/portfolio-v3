import React from 'react';
import { render } from 'react-testing-library';
import Nav from './Nav';

describe('Nav', () => {
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

  it('renders without crashing', () => {
    const { asFragment } = render(<Nav url={url} links={links} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

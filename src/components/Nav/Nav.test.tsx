import React from 'react';
import { render } from 'react-testing-library';
import Nav from './Nav';

describe('Nav', () => {
  const props = {
    title: `Narendra Syahrasyad`,
    description: `Front-end web developer and Business and Computer Science candidate at UBC.`,
    url: `narendras.io`,
    links: [
      {
        name: `projects`,
        url: `/projects`,
      },
      {
        name: `about`,
        url: `/about`,
      },
      {
        name: `blog`,
        url: `/blog`,
      },
      {
        name: `resume`,
        url: `/resume`,
      },
    ],
    onNavClick: jest.fn(),
  };

  it('renders without crashing', () => {
    const { asFragment } = render(<Nav {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

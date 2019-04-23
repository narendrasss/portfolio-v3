import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Content from './Content';

describe('Content', () => {
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
    const { asFragment } = render(<Content {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handler on nav button press', () => {
    const { getByTestId } = render(<Content {...props} />);

    fireEvent.click(getByTestId('nav-button'));
    expect(props.onNavClick).toHaveBeenCalled();
  });
});

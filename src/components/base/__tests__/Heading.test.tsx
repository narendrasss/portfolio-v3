import React from 'react';
import { render } from 'react-testing-library';
import Heading from '../Heading';

describe('Heading', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Heading />);
    expect(asFragment()).toMatchSnapshot();
  });
});

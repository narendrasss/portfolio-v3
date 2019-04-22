import React from 'react';
import { render } from 'react-testing-library';
import Link from '../Link';

describe('Link', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Link to="localhost" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

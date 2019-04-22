import React from 'react';
import { render } from 'react-testing-library';
import Box from '../Box';

describe('Box', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});

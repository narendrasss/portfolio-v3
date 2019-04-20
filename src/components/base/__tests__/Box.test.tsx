import React from 'react';
import { render } from 'react-testing-library';
import Box from '../Box';

describe('Box', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  });
});

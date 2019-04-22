import React from 'react';
import { render } from 'react-testing-library';
import Text from '../Text';

describe('Text', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Text />);
    expect(asFragment()).toMatchSnapshot();
  });
});

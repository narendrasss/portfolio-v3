import React from 'react';
import { render } from 'react-testing-library';
import Loading from './Loading';

describe('Loading', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});

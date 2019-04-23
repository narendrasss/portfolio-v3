import React from 'react';
import { render } from 'react-testing-library';
import Main from './Main';

describe('Main', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});

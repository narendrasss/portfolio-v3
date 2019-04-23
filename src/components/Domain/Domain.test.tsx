import React from 'react';
import { render } from 'react-testing-library';
import Domain from './Domain';

describe('Domain', () => {
  const url = 'narendras.io';

  it('renders without crashing', () => {
    const { asFragment } = render(<Domain url={url} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders own domain', () => {
    const ownDomain = url.split('.')[0];
    const { queryByText } = render(<Domain url={url} />);
    expect(queryByText(ownDomain)).toBeTruthy();
  });

  it('renders top-level domain', () => {
    const topLevelDomain = url.split('.')[1];
    const { queryByText } = render(<Domain url={url} />);
    expect(queryByText('.' + topLevelDomain)).toBeTruthy();
  });
});

import React from 'react';
import { render } from 'react-testing-library';
import List from '../List';

describe('List', () => {
  const testArray = ['hello', 'welcome'];
  const renderFn = (str: string) => <p key={str}>{str}</p>;

  it('renders without crashing', () => {
    const { asFragment } = render(<List items={testArray}>{renderFn}</List>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct elements', () => {
    const { queryByText } = render(<List items={testArray}>{renderFn}</List>);
    testArray.forEach(str => {
      expect(queryByText(str)).not.toBeNull();
    });
  });
});

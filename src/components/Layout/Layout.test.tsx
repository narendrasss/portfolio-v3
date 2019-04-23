import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import Layout from './Layout';

jest.mock('../../hooks');

describe('Layout', () => {
  const component = <Layout />;

  it('renders without crashing', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders main component on initial mount', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('main')).toBeTruthy();
    expect(queryByTestId('nav')).toBeNull();
  });

  it('renders nav component when nav button is clicked', () => {
    const { queryByTestId, getByTestId } = render(component);

    fireEvent.click(getByTestId('nav-button'));
    expect(waitForElement(() => getByTestId('nav'))).resolves.toBeTruthy();
    expect(waitForElement(() => queryByTestId('main'))).resolves.toBeNull();
  });
});

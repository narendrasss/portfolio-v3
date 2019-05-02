import React from 'react';
import { render, fireEvent, waitForElement } from 'react-testing-library';
import Layout from './Layout';

jest.mock('../../hooks');

describe('Layout', () => {
  const component = <Layout title="Narendra Syahrasyad" />;

  it('renders content on first mount', () => {
    const { queryByTestId } = render(component);
    expect(queryByTestId('content')).toBeTruthy();
    expect(queryByTestId('nav')).toBeNull();
  });

  it('renders nav when nav button is clicked', () => {
    const { queryByTestId, getByTestId } = render(component);
    fireEvent.click(getByTestId('nav-button'));
    expect(waitForElement(() => queryByTestId('nav'))).resolves.toBeTruthy();
  });
});

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import NavIconButton from './NavIconButton';

describe('NavIconButton', () => {
  const mockHandler = jest.fn();

  it('renders without crashing', () => {
    const { asFragment } = render(<NavIconButton onClick={mockHandler} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls click handler when clicked', () => {
    const { getByTestId } = render(<NavIconButton onClick={mockHandler} />);
    fireEvent.click(getByTestId('button'));
    expect(mockHandler).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import NavButton from './NavButton';

describe('NavIconButton', () => {
  const mockHandler = jest.fn();

  it('renders without crashing', () => {
    const { asFragment } = render(<NavButton onClick={mockHandler} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls click handler when clicked', () => {
    const { getByTestId } = render(<NavButton onClick={mockHandler} />);
    fireEvent.click(getByTestId('button-open'));
    expect(mockHandler).toHaveBeenCalled();
  });

  it('renders open button on initial mount', () => {
    const { queryByTestId } = render(<NavButton onClick={mockHandler} />);
    expect(queryByTestId('button-open')).toBeTruthy();
    expect(queryByTestId('button-close')).toBeNull();
  });

  it('renders close button given isOpen prop', () => {
    const { queryByTestId } = render(
      <NavButton onClick={mockHandler} isOpen />
    );
    expect(queryByTestId('button-close')).toBeTruthy();
    expect(queryByTestId('button-open')).toBeNull();
  });
});

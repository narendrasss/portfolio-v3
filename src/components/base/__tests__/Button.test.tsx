import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Button from '../Button';

describe('Button', () => {
  const mockHandler = jest.fn();

  it('renders without crashing', () => {
    const { asFragment } = render(<Button onClick={mockHandler} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handler when clicked', () => {
    const { getByTestId } = render(<Button onClick={mockHandler} />);
    fireEvent.click(getByTestId('button'));
    expect(mockHandler).toHaveBeenCalled();
  });
});

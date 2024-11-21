import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

// Make sure counter message renders correctly
test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

// Make sure that the initial value is 0 
test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

// Test for increasing the count
test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');
  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('1');
});

// Test for decreasing the count
test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');
  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('-1');
});

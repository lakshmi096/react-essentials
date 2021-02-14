import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link by format one', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React Testing Library/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link by form two', () => {
  const {getByText} = render(<App/>)
  const h1 = getByText(/Hello React Testing Library/i)
  expect(h1).toHaveTextContent("Hello React Testing Library");
});

import { fireEvent, render} from '@testing-library/react';
import Checkbox from './Checkbox';

// test('renders learn react link by format one', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello React Testing Library/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Selecting Checkbox', () => {
  const {getByLabelText} = render(<Checkbox/>)
  const checkbox = getByLabelText(/not checked/)
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(true);
});

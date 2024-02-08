import { render, screen } from '@testing-library/react';
import App from './App';
describe('App component', () => {
  test('renders the heading', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /test tube rack manager/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the RackManager component', () => {
    render(<App />);
    const rackManagerElement = screen.getByText(/add tube/i); // looking for "Add Tube" button/text
    expect(rackManagerElement).toBeInTheDocument();
  });
});
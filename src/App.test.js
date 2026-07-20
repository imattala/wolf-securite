import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site brand in the navigation', () => {
  render(<App />);
  const brandLinks = screen.getAllByText(/wolf sécurité/i);
  expect(brandLinks.length).toBeGreaterThan(0);
});

test('renders the homepage hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /partenaire de confiance/i });
  expect(heading).toBeInTheDocument();
});

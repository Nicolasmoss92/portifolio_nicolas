import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';
import AboutMeSection from '.';

describe('AboutMe Component', () => {

  beforeEach(() => {
    render(<AboutMeSection />);
  });

  test('renders the footer correctly', () => {
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders the image correctly', () => {
    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/logoDBF.png');
  });
});


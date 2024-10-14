import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '.';
import AboutMeSection from '.';

describe('AboutMe Component', () => {

  beforeEach(() => {
    render(<AboutMeSection />);
  });

  test('verify that the "sobre mim" title is rendered', () => {
    const titleElement = screen.getByText(/sobre mim/i);
    expect(titleElement).toBeInTheDocument();
  })

  test('verify that the description is rendered', () => {
    const descriptionElement = screen.getByText(/lorem ipsum dolor sit amet/i);
    expect(descriptionElement).toBeInTheDocument();
  })
});


import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IntroSection from '.';

describe('IntroSection Component', () => {

  beforeEach(() => {
    render(<IntroSection />);
  });

  test('verify that the introductory text is rendered', () => {
    const introElement = screen.getByText(/olá, meu nome é/i);
    expect(introElement).toBeInTheDocument();
  });

  test('verify that the name is rendered', () => {
    const nameElement = screen.getByText(/nicolas moss/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('verify that the description is rendered', () => {
    const descriptionElement = screen.getByText(/sou desenvolvedor de software na dbserver/i);
    expect(descriptionElement).toBeInTheDocument();
  })
});


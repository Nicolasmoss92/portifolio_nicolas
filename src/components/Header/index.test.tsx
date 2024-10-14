import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('Header Component', () => {

  beforeEach(() => {
    render(<Header />);
  });

  test('check if the logo is present', () => {
    const logoElement = screen.getByAltText('Logo DB');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', '/logoDB.png');
  })

  test('check if navigation links are present', () => {
    const aboutLink = screen.getByText(/sobre/i);
    const curriculumLink = screen.getByText(/currículo/i);
    const projectsLink = screen.getByText(/projetos/i);

    expect(aboutLink).toBeInTheDocument();
    expect(curriculumLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
  })
});
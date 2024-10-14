import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProfileImage from '.';

describe('AboutMe Component', () => {

  beforeEach(() => {
    render(<ProfileImage />);
  });

  test('renders profile image with correct src and alt attributes', () => {
    const imageElement = screen.getByAltText(/foto de perfil/i);
    expect(imageElement).toBeInTheDocument();

    expect(imageElement).toHaveAttribute('src', '/nicolasPerfil.jpeg');
  });
});


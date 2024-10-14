import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from './projectCrad';
import { ProjectCardProps } from '@/types/projectCard';

describe('ProjectCard Component', () => {
  const mockProjectCard: ProjectCardProps = {
    title: 'Library Project',
    description: 'This is a sample project description.',
    technologies: 'React, TypeScript, Tailwind',
    imageUrl: '/library-image.jpg',
  };

  beforeEach(() => {
    render(<ProjectCard {...mockProjectCard} />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText(mockProjectCard.title);

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    const descriptionElement = screen.getByText(mockProjectCard.description);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the technologies correctly', () => {
    const technologiesElement = screen.getByText(mockProjectCard.technologies);

    expect(technologiesElement).toBeInTheDocument();
  });

  it('renders the image with correct src attribute', () => {
    const imageElement = screen.getByAltText(mockProjectCard.title);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProjectCard.imageUrl);
  });

  it('renders the "Acessar" button', () => {
    const buttonElement = screen.getByRole('button', { name: /acessar/i });

    expect(buttonElement).toBeInTheDocument();
  });
});

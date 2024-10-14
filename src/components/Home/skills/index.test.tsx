import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillsSection from '.';
import { Skill } from '@/types/skillSection';

describe('AboutMe Component', () => {
  const skills: Skill[] = [
    { name: 'JavaScript', filled: 4, total: 5 },
    { name: 'React', filled: 5, total: 5 },
    { name: 'Node.js', filled: 3, total: 5 },
  ];

  beforeEach(() => {
    render(<SkillsSection skills={skills} />);
  });

  test('verify that the "Habilidades" title is rendered', () => {
    const titleElement = screen.getByText(/habilidades/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('verify that each skill name is rendered', () => {
    skills.forEach(skill => {
      const skillElement = screen.getByText(skill.name);
      expect(skillElement).toBeInTheDocument();
    });
  });
});


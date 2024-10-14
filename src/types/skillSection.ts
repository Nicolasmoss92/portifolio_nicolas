export interface Skill {
    name: string;
    filled: number;
    total: number;
}

export interface SkillsSectionProps {
    skills: Skill[];
}


const skills = [
    { name: "NODE", filled: 4, total: 5 },
    { name: "PYTHON", filled: 3, total: 5 },
    { name: "JAVASCRIPT", filled: 5, total: 5 },
    { name: "REACT", filled: 4, total: 5 },
    { name: "NESTJS", filled: 3, total: 5 },
    { name: "NEXTJS", filled: 4, total: 5 },
    { name: "TYPESCRIPT", filled: 4, total: 5 },
    { name: "TAILWIND", filled: 4, total: 5 },
    { name: "DOCKER", filled: 3, total: 5 },
    { name: "MYSQL", filled: 3, total: 5 },
    { name: "POSTGRES", filled: 3, total: 5 },
];

export default skills;
  
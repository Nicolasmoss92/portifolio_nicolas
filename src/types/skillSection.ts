interface Skill {
    name: string;
    filled: number;
    total: number;
}

export interface SkillsSectionProps {
    skills: Skill[];
}

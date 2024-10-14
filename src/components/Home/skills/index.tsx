'use client';

import { Skill, SkillsSectionProps } from "@/types/skillSection";

const SkillItem = ({ name, filled, total }: Skill) => {
    return (
        <li className="flex items-center">
            <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
            <p className="font-supermolot text-xl font-medium mr-4 w-24">{name}</p>
            <div className="flex space-x-1 ml-10">
                {Array.from({ length: filled }).map((_, index) => (
                    <div key={index} className="w-6 h-6 rounded-full bg-yellow-500"></div>
                ))}
                {Array.from({ length: total - filled }).map((_, index) => (
                    <div key={index + filled} className="w-6 h-6 rounded-full border-2 border-yellow-500"></div>
                ))}
            </div>
        </li>
    );
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <div className="bg-white">
            <div className="p-8 md:mr-32 lg:mr-64">
                <h2 className="font-supermolot text-3xl font-bold mb-6 font-poppins">Habilidades</h2>
                <ul className="space-y-4 ml-2">
                    {skills.map(skill => (
                        <SkillItem key={skill.name} name={skill.name} filled={skill.filled} total={skill.total} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

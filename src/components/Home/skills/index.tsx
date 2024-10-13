import SkillItem from "@/untils/skill"; 


interface Skill {
    name: string;
    filled: number;
    total: number;
}

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <div className="bg-white p-8 md:mr-32 lg:mr-64">
                    <h2 className="text-3xl font-bold mb-6 font-poppins">Habilidades</h2>
                    <ul className="space-y-4">
                        {skills.map(skill => (
                            <SkillItem key={skill.name} name={skill.name} filled={skill.filled} total={skill.total} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

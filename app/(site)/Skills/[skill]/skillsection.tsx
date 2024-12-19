// app/components/SkillsSection.tsx


import { SkillsType } from "@/types";

interface SkillsSectionProps {
  skills: SkillsType[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <>
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          {skills[0]?.Headline || "I SPECIALIZE IN A RANGE OF 💪 "} 
        </h1>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-16">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 border ${
              skill.highlight ? "bg-lime-500 text-black" : "bg-white text-gray-800"
            } shadow-sm rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="text-center">
              <div className="mb-4 text-3xl">{skill.icon}</div>
              <h3 className="font-bold text-xl mb-2">{skill.title}</h3>
              <p className="text-sm mb-4">{skill.description}</p>
              {skill.Headline && (
                <h4 className="text-lg font-semibold text-gray-700">
                  {skill.Headline}
                </h4>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default SkillsSection;
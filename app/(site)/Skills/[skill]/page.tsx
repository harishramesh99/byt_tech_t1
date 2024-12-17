// app/components/Skills.tsx
"use client";

import { getSkills } from "@/sanity/sanity.query";
import type { SkillsType } from "@/types";
import ContactModal from "./ContactModal";
import { useState, useEffect } from "react";



const SkillsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [skills, setSkills] = useState<SkillsType[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const skillsData = await getSkills();
      setSkills(skillsData);
    };
    fetchSkills();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          {skills[0]?.Headline || "I SPECIALIZE IN A RANGE OF 💪 SKILLS"}
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
              <div className="mb-4 text-3xl">
                {skill.icon}
              </div>
              
              <h3 className="font-bold text-xl mb-2">
                {skill.title}
              </h3>
              
              <p className="text-sm mb-4">
                {skill.description}
              </p>
              
              {skill.Headline && (
                <h4 className="text-lg font-semibold text-gray-700">
                  {skill.Headline}
                </h4>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-lime-500 inline-block text-transparent bg-clip-text">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-gray-400 mb-8">
          From concept to deployment, bringing your vision to life
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-lime-500 hover:bg-lime-600 text-black font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          Start a Project
        </button>
      </section>

     
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      
    </main>
  );
};

export default SkillsPage;
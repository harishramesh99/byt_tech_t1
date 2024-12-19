// app/components/SkillsDataProvider.tsx
"use client";

import { useEffect, useState } from "react";
import { getSkills } from "@/sanity/sanity.query";
import type { SkillsType } from "@/types";
import SkillsSection from "./skillsection";

const SkillsDataProvider = () => {
  const [skills, setSkills] = useState<SkillsType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('SkillsDataProvider mounted');
    const fetchSkills = async () => {
      try {
        console.log('Fetching skills...');
        const skillsData = await getSkills();
        //console.log('Skills fetched:', skillsData);
        setSkills(skillsData);
      } catch (err) {
        //console.error('Error in fetchSkills:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch skills');
      }
    };
    fetchSkills();
  }, []);

  if (error) {
    return <div>Error loading skills: {error}</div>;
  }

  return <SkillsSection skills={skills} />;
};

export default SkillsDataProvider;
// app/components/Skills.tsx
"use client";

import SkillsDataProvider from "./[skill]/SkillsDataProvider";
import ContactSection from "./[skill]/contactSection";



 // app/components/Skills.tsx
const SkillsPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-16">
      
      <SkillsDataProvider />
      <ContactSection />
    </main>
  );
};

export default SkillsPage;
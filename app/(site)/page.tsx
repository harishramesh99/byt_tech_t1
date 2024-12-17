import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import About from "../(site)/about/page";
import Projects from "../(site)/projects/page";
import SkillsPage from "./Skills/[skill]/page";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();
  
  

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
     <section id="about" className="mb-16">
        <About />
      </section>
      <section id="skills" className="mb-16">
        <SkillsPage  />
      </section>
      <section id="projects" className="mb-16">
        <Projects />
      </section>
      
    </main>
  );
}

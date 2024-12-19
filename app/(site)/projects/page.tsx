import Image from "next/legacy/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          HERE&apos;S A GLIMPSE OF SOME EXCITING{" "}
          <span className="text-yellow-400">🧑‍💻PROJECTS</span> I&apos;VE DONE
        </h1>
      </section>

      {/* Projects Grid Section */}
      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border border-gray-300 rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.coverImage?.image || "/placeholder.png"}
                alt={project.coverImage?.alt || project.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{project.tagline}</p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-4">
                {/* Example tags */}
                <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg">
                  React
                </span>
                <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-200 rounded-lg">
                  Node.js
                </span>
              </div>

              {/* View Project Link */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800"
              >
                View Project
                <span className="text-xl">➔</span>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

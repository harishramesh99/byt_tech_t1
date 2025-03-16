import Image from "next/legacy/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className=" flex flex-col items-start justify-start gap-y-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div
              key={data._id}
              className="max-w-full flex flex-col lg:flex-row items-start gap-8"
            >
              {/* Content Section */}
              <div className="flex-1">
                {/* Headline */}
                <h1 className="text-[rgb(var(--text-primary))] text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
                  {data.headline}
                </h1>
                
                {/* Bio */}
                <p className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed max-w-2xl">
                  {data.shortBio}
                </p>

                {/* Social Links */}
                <ul className="flex items-center gap-x-6 mt-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noreferer noopener"
                          className="btn-base btn-primary theme-transition"
                        >
                          {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>

                {/* Interactive Widgets */}
                <div className="mt-12 space-y-4">
                  <button className="btn-base btn-primary theme-transition">
                    Hire Me as a ServiceNow Developer
                  </button>
                </div>
              </div>

              {/* Profile Image and Contact Section */}
              <div className="lg:w-1/3 lg:ml-auto mt-10 lg:mt-0">
                <div className=" p-0 overflow-hidden">
                  <Image
                    className="rounded-2xl object-cover max-h-96 bg-top"
                    src={data.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={data.profileImage.alt}
                  />
                </div>

                {/* Resume Download Link */}
                <a
                  href={`${data.resumeURL}?dl=${data.fullName}_resume`}
                  className=" flex items-center justify-center gap-x-2 
                           hover:border-[rgb(var(--border))] theme-transition 
                           py-2 text-center cursor-pointer font-medium mt-4"
                >
                  <BiFile className="text-[rgb(var(--text-primary))]" /> 
                  <span className="text-[rgb(var(--text-primary))]">Download Resumé</span>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-x-2 text-[rgb(var(--text-primary))] 
                           hover:text-[rgb(var(--button-primary))] theme-transition mt-4"
                >
                  <BiEnvelope className="text-lg" />
                  {data.email}
                </a>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
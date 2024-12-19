import Image from "next/legacy/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";

import { BiEnvelope, BiFile } from "react-icons/bi";

export default async function About() {
  const profile: ProfileType[] = await getProfile();
 

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <section className="flex flex-col items-start justify-start gap-y-12 lg:mt-32 mt-20 mb-16">
    {profile &&
      profile.map((data) => (
        <div key={data._id} className="max-w-full flex flex-col lg:flex-row items-start gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6 text-white">
              {data.headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {data.shortBio}
            </p>
            <ul className="flex items-center gap-x-6 mt-10">
              {Object.entries(data.socialLinks)
                .sort()
                .map(([key, value], id) => (
                  <li key={id}>
                    <a
                      href={value}
                      rel="noreferer noopener"
                      className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
                    >
                      {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                    </a>
                  </li>
                ))}
            </ul>

            {/* Interactive Widgets */}
            <div className="mt-12 space-y-4">
              <button className="px-6 py-3 bg-green-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
                Hire Me as a ServiceNow Developer
              </button>
              
              
            </div>
          </div>
          
          <div className="lg:w-1/3 lg:ml-auto mt-10 lg:mt-0 ">
          <Image
              className="rounded-2xl object-cover max-h-96 bg-top bg-[#1d1d20]"
              src={data.profileImage.image}
              width={400}
              height={400}
              quality={100}
              alt={data.profileImage.alt}
            />
          
            
            <a
              href={`${data.resumeURL}?dl=${data.fullName}_resume`}
              className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-pointer font-medium mt-4"
            >
              <BiFile className="text-base" /> Download Resumé
            </a>
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-x-2 hover:text-purple-400 duration-300 mt-4"
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
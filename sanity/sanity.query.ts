import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {
        alt, 
        "image": asset->url
      },
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
       

    }`
  );
}

export async function getJob() {
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      "logo": logo.asset->url,
      url,
      description,
      startDate,
      endDate,
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "coverImage": coverImage {
    alt,
    "image": asset->url
  }
    }`
  );
}

/*export async function getSkills() {
  return client.fetch(
    groq`*[_type == "skill"]{
      _id,
      title,                  // Title of the skill
      description,            // Description of the skill
      icon,                   // Icon for the skill (emoji or font-awesome class)
      highlight,
      Headline              // Boolean to check if the skill is highlighted
    }`
  );
}*/
export async function getSkills() {
  try {
    //console.log('Starting getSkills fetch...');
    const query = groq`*[_type == "skills"]{
      _id,
      title,
      description,
      icon,
      highlight,
      Headline
    }`;
    //console.log('Query:', query);
    const data = await client.fetch(query);
    //console.log('Skills Data Received:', data);
    return data;
  } catch (error) {
    //console.error('Error fetching skills:', error);
    throw error;
  }
}




export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
    { slug }
  );
}



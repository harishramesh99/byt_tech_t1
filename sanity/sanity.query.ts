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


export async function getBlogPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      mainImage {
        alt,
        "image": asset->url
      }
    }`
  );
}

/*export async function getSinglePost(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      publishedAt,
      excerpt,
      mainImage {
        alt,
        "image": asset->url
      },
      body
    }`,
    { slug }
  );
}*/

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




export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      projectUrl,
      "coverImage": {
        "image": coverImage.asset->url,
        "alt": coverImage.alt
      }
    }`
  );
}

export async function getsingleProject(slug: string | undefined) {
  if (!slug) return null;
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      name,
      tagline,
      "coverImage": {
        "image": coverImage.asset->url,
        "alt": coverImage.alt
      },
      description,
      projectUrl
    }`,
    { slug }
  );
}
export async function getCaseStudies() {
  const query = `*[_type == "caseStudy"] {
    _id,
    title,
    description,
    solutions,
    metrics
  }`;
  return await client.fetch(query);
}


export async function reviewsQuery() {
  return client.fetch(
    groq`*[_type == "review"] {
      _id,
      author_name,
      author_url,
      "profile_photo_url": profile_photo_url.asset->url,
      rating,
      text,
      time,
      isGoogleReview
    }`
  );
}

// sanity/sanity.query.ts
export async function getNavbar() {
  try {
    const query = `*[_type == "navbar"][0] {
      logo {
        asset-> {
          url
        },
        alt
      },
      logoText,
      menuItems[] {
        _key,
        text,
        href,
        isExternal,
        order
      }
    }`;

    const navbar = await client.fetch(query);
    return navbar || null; // Return null if no navbar document exists
  } catch (error) {
    console.error('Error fetching navbar:', error);
    return null; // Return null on error
  }
}


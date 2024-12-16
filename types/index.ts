import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    alt: string;
    image: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  image: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};

export type SkillsType = {
  _id: string; // Unique identifier for the skill document
  title: string; // The name/title of the skill
  description: string; // A brief description of the skill
  icon: string; // An emoji or icon representing the skill
  highlight: boolean; // Indicates if the skill is highlighted
  Headline: string; // The headline associated with the skill
};


// frontend/types/index.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}
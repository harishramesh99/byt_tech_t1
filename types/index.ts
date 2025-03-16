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

export interface ProjectType {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  tagline: string;
  projectUrl?: string;
  coverImage: {
    image: string;
    alt?: string;
  };
  description: any; // For PortableText content
  tags?: string[];
}

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

export interface PostType {
  slug: any;
  _id: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  mainImage: {
    alt: string;
    image: string;
  };
  body: PortableTextBlock[];
}

export interface caseStudyType {
  _id: string;
  title: string;
  description: string;
  solutions: string[];
  metrics: {
    value: string;
    label: string;
  }[];
}

export interface Review {
  _id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: string;
  isGoogleReview: boolean;
}

// types/index.ts
export interface MenuItem {
  _key: string;
  text: string;
  href: string;
  isExternal?: boolean;
  order?: number;
}

export interface Navbar {
  logo?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  logoText?: string;
  menuItems: MenuItem[];
}
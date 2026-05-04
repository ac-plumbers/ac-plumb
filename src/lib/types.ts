export type ServiceFeature = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

import type { ImageMetadata } from "astro";

export type ServiceFrontmatter = {
  title: string;
  description?: string;
  badge?: string;
  paragraph?: string;
  price?: number;
  image?: ImageMetadata;
  imageHero?: ImageMetadata;
  altHero?: string;
  titleImageHero?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  slug?: string;
  alt?: string;
  titleImage?: string;
  intro?: string;
  benefits?: string[];
  specialties?: string[];
  features?: ServiceFeature[];
  process?: ServiceStep[];
  faqs?: ServiceFaq[];
  gallery?: Array<{
    src: ImageMetadata;
    alt: string;
    title?: string;
  }>;
};

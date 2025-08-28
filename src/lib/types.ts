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

export type ServiceFrontmatter = {
  title: string;
  description: string;
  price: number;
  image?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
  slug?: string;
  alt?: string;
  intro?: string;
  benefits?: string[];
  specialties?: string[];
  features?: ServiceFeature[];
  process?: ServiceStep[];
  faqs?: ServiceFaq[];
};
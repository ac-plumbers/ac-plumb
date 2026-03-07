
import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    paragraph: z.string().optional(),
    sortedOrder: z.number().optional(),

    // Stores plain URL like "/images/services/bathroom-hero.jpeg"
    image: z.string().optional(),
    alt: z.string().optional(),
    titleImage: z.string().optional(),
    imageHero: z.string().optional(),
    altHero: z.string().optional(),
    titleImageHero: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).default([]),

    featured: z.boolean().default(false),

    // Optional: Astro usually derives slug from filename
    slug: z.string().optional(),

    // New fields for full CMS-driven content
    intro: z.string().optional(),
    benefits: z.array(z.string()).default([]),
    specialties: z.array(z.string()).default([]),

    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
        })
      )
      .default([]),

    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string().optional(),
        })
      )
      .default([]),

    // Add gallery field
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          title: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const areas = defineCollection({
  type: "content",
  schema: z.object({
    area: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    sortOrder: z.number().optional(),
    featured: z.boolean().default(false),
    services: z.array(z.string()).default([]),
    postcode: z.string().optional(),
    level: z.string().optional(),
    responseTime: z.string().optional(),
    region: z.string().optional(),
    neighborhoods: z.array(z.string()).default([]),
    specificContent: z.string().optional(),
    faqs: z
      .array(
        z.object({
          question: z.string().optional(),
          answer: z.string().optional(),
        })
      )
      .default([]),
  }),
});

const legal = defineCollection({
  type: "content",
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional(),
    title: z.string(),
    description: z.string(),
    keywords: z.string().optional(),
    author: z.string().optional(),
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
  }),
});



export const collections = {
  services,
  areas,
  legal,

};

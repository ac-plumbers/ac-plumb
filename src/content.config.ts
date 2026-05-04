import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      badge: z.string().optional(),
      paragraph: z.string().optional(),
      sortedOrder: z.number().optional(),

      image: image().optional(),
      alt: z.string().optional(),
      titleImage: z.string().optional(),
      imageHero: image().optional(),
      altHero: z.string().optional(),
      titleImageHero: z.string().optional(),

      category: z.string().optional(),
      tags: z.array(z.string()).default([]),

      featured: z.boolean().default(false),

      intro: z.string().optional(),
      benefits: z.array(z.string()).default([]),
      specialties: z.array(z.string()).default([]),

      features: z
        .array(
          z.object({
            title: z.string(),
            description: z.string().optional(),
          }),
        )
        .default([]),

      faqs: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string().optional(),
          }),
        )
        .default([]),

      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            title: z.string().optional(),
          }),
        )
        .optional(),
    }),
});

const areas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/areas" }),
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
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string().optional(),
        }),
      )
      .default([]),
    specificContent: z.string().optional(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
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

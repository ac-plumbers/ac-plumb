// src/content/config.ts
import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.number().optional(),

    // Stores plain URL like "/images/services/bathroom-hero.jpeg"
    image: z.string().optional(),
    alt: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).default([]),

    featured: z.boolean().default(false),

    // Optional: Astro usually derives slug from filename
    slug: z.string().optional(),

    // Structured fields
    features: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
        })
      )
      .default([]),

    steps: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
        })
      )
      .default([]),

    questions: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  services,
};
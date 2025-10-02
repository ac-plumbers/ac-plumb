// src/content/config.ts
import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.number().optional(),
    sortedOrder: z.number().optional(),

    // Stores plain URL like "/images/services/bathroom-hero.jpeg"
    image: z.string().optional(),
    alt: z.string().optional(),

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

    process: z
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
  }),
});

const areas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    sortOrder: z.number().optional().default(999),
    featured: z.boolean().optional().default(false),
    services: z.array(z.string()).optional(),
    postcode: z.string().optional(),
    responseTime: z.string().optional(),
    level: z.enum(["Priority", "Standard", "Extended"]).optional(),
    area: z.string().optional(),
    region: z.string().optional().default("East Sussex"),
    neighborhoods: z.array(z.string()).optional(),
    testimonials: z.array(z.string()).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional(),
    specificContent: z.string().optional()
  })
});

export const collections = {
  services,
  areas
};
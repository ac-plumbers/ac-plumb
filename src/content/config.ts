import { defineCollection, z } from "astro:content";
import { title } from "process";

const services = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      price: z.number(),
      image: z.string().optional(),
      alt: z.string().optional(),
      category: z.string().optional(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().optional(),
      slug: z.string().optional(),
    }),
});

export const collections = {
  services: services,
};

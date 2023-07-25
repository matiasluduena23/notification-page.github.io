
import {z, defineCollection } from "astro:content";

const post = defineCollection({
    schema: z.object({
      name: z.string(),
      type: z.string(),
      message: z.string().optional(),
      group: z.string().optional(),
      read: z.boolean(),
      time: z.string(),
      image: z.string(),
      picture: z.string().optional(),
      inbox: z.string().optional()
    }),
});

export const collections = { post };


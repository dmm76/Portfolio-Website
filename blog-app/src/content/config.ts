import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3, "Informe um título para o post."),
      description: z.string().min(10, "Escreva uma descrição curta para o post."),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  posts,
};

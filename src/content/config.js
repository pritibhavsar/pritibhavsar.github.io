// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    bigImg: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    authorImg: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default('Pimjolabs'),
    comments: z.string().optional(),
    views: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    template: z.enum(['default', 'standard', 'other']).default('default'),
    blogContentCollection: z.array(
      z.object({
        type: z.string(),
        name: z.string(),
        description: z.string(),
      })
    ).default([]),
    postDetails: z.object({
      paraOne: z.string(),
      paraTwo: z.string(),
      title: z.string(),
      paraThree: z.string(),
      titleTwo: z.string(),
      paraFour: z.string(),
      paraFive: z.string()
    }).optional(),
    quotes: z.object({
      quote: z.string(),
      author: z.string(),
    }).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
};

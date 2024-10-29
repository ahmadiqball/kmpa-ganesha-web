import { defineField, defineType } from 'sanity';

export const gallerySchema = defineType({
  name: 'gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
});

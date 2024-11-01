import { defineField, defineType } from 'sanity';

export const articleSchema = defineType({
  name: 'article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

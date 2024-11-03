import { kebabCase } from 'lodash';
import { defineArrayMember, defineField, defineType } from 'sanity';

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
      options: {
        source: 'title',
        slugify: (string) => {
          return `/${kebabCase(string)}`;
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
          fields: [
            defineField({
              name: 'caption',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});

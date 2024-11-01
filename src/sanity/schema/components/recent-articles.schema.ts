import { BiSolidCarousel } from 'react-icons/bi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const recentArticlesSchema = defineType({
  name: 'recentArticles',
  type: 'object',
  icon: BiSolidCarousel,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['light', 'dark'],
      },
    }),
    defineField({
      name: 'articles',
      type: 'array',
      validation: (Rule) => Rule.min(1).required(),
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'article' }],
        }),
      ],
    }),
  ],
});

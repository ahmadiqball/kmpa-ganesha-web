import { defineField, defineType } from 'sanity';

export const recentArticlesSchema = defineType({
  name: 'recentArticles',
  type: 'object',
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
      type: 'reference',
      to: [{ type: 'article' }],
    }),
  ],
});

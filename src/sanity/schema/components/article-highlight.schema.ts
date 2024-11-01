import { GrArticle } from 'react-icons/gr';
import { defineField, defineType } from 'sanity';

export const articleHighlightSchema = defineType({
  name: 'articleHighlight',
  type: 'object',
  icon: GrArticle,
  fields: [
    defineField({
      name: 'pretitle',
      type: 'string',
    }),
    defineField({
      name: 'article',
      type: 'reference',
      to: [{ type: 'article' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});

import { defineArrayMember, defineField, defineType } from 'sanity';

export const highlightCardSchema = defineType({
  name: 'highlightCard',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'card',
          type: 'reference',
          to: [{ type: 'article' }],
        }),
      ],
    }),
  ],
});

import { RiLayout4Fill } from 'react-icons/ri';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const highlightCardSchema = defineType({
  name: 'highlightCard',
  type: 'object',
  icon: RiLayout4Fill,
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

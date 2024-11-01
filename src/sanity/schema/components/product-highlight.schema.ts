import { RiBookletFill } from 'react-icons/ri';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const productHighlightSchema = defineType({
  name: 'productHighlight',
  type: 'object',
  icon: RiBookletFill,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'bakcgroundImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'product',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
            }),
            defineField({
              name: 'link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
});

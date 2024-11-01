import { TfiLayoutGrid2Thumb } from 'react-icons/tfi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const infoBreakdownSchema = defineType({
  name: 'infoBreakdown',
  type: 'object',
  icon: TfiLayoutGrid2Thumb,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breakdowns',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'breakdown',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
            }),
            defineField({
              name: 'icon',
              type: 'iconPicker',
            }),
            defineField({
              name: 'text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
});

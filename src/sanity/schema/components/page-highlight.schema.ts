import { RiPagesLine } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export const pageHighlightSchema = defineType({
  name: 'pageHighlight',
  type: 'object',
  icon: RiPagesLine,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pretitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image on Left', value: 'left' },
          { title: 'Image on Right', value: 'right' },
        ],
      },
      initialValue: 'left',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: ['light', 'dark'],
      },
      initialValue: 'dark',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

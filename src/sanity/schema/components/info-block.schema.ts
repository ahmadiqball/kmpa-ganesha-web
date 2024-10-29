import { defineField, defineType } from 'sanity';

export const infoBlockSchema = defineType({
  name: 'infoBlock',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'portableText',
    }),
    defineField({
      name: 'quote',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'string',
      options: {
        list: [
          { title: 'Image On Left', value: 'left' },
          { title: 'Image On Right', value: 'right' },
        ],
      },
    }),
    defineField({
      name: 'backgroundColor',
      type: 'color',
    }),
  ],
});

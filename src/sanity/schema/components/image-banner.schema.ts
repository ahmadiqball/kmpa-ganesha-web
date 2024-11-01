import { FaRegImage } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const imageBannerSchema = defineType({
  name: 'imageBanner',
  type: 'object',
  icon: FaRegImage,
  fields: [
    defineField({
      name: 'backgroundImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Left Aligned', value: 'left' },
          { title: 'Right Aligned', value: 'right' },
        ],
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      type: 'url',
    }),
  ],
});

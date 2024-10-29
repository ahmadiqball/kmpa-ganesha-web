import { defineField, defineType } from 'sanity';

export const fullSpanMediaSchema = defineType({
  name: 'fullSpanMedia',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      type: 'url',
    }),
    defineField({
      name: 'gradientColor',
      type: 'color',
      options: {
        colorList: ['#FFF', '#0A2429', '#D68B30'],
      },
    }),
  ],
});

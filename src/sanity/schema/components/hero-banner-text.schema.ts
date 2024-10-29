import { defineField, defineType } from 'sanity';

export const heroBannerTextSchema = defineType({
  name: 'heroBannerText',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'pretitle',
      type: 'string',
    }),
    defineField({
      name: 'pretitleIcon',
      type: 'iconPicker',
    }),
    defineField({
      name: 'subtitle',
      type: 'text',
    }),
    defineField({
      name: 'textHorizontalPosition',
      type: 'string',
      options: {
        list: ['left', 'middle', 'right'],
      },
    }),
    defineField({
      name: 'textVerticalPosition',
      type: 'string',
      options: {
        list: ['top', 'middle', 'bottom'],
      },
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'color',
    }),
    defineField({
      name: 'gradientColor',
      type: 'color',
    }),
  ],
});

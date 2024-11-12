import { RiLayoutBottomFill } from 'react-icons/ri';
import { defineField, defineType } from 'sanity';

export const heroBannerTextSchema = defineType({
  name: 'heroBannerText',
  type: 'object',
  icon: RiLayoutBottomFill,
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
      options: {
        outputFormat: 'react',
        storeSvg: true,
      },
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
      initialValue: 'middle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'textVerticalPosition',
      type: 'string',
      options: {
        list: ['top', 'middle', 'bottom'],
      },
      initialValue: 'middle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'colorPicker',
    }),
    defineField({
      name: 'gradientColor',
      type: 'colorPicker',
    }),
  ],
});

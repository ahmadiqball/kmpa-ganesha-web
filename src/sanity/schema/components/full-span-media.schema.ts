import { FaRegImages } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

export const fullSpanMediaSchema = defineType({
  name: 'fullSpanMedia',
  type: 'object',
  icon: FaRegImages,
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
      type: 'colorPicker',
      options: {
        colorList: ['#FFF', '#0A2429', '#D68B30'],
      },
    }),
  ],
});

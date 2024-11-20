import { PiWaveSine } from 'react-icons/pi';
import { defineField, defineType } from 'sanity';

export const dividerSchema = defineType({
  name: 'divider',
  type: 'object',
  icon: PiWaveSine,
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: Array.from({ length: 2 }, (_, index) => ({ title: `Type ${index + 1}`, value: `type${index + 1}` })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orientation',
      type: 'string',
      options: {
        list: ['top', 'bottom'],
      },
    }),
    defineField({
      name: 'baseColor',
      type: 'colorPicker',
    }),
  ],
});

import { defineField, defineType } from 'sanity';

export const dividerSchema = defineType({
  name: 'divider',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [...Array(5)].map((_, index) => ({ title: `Type ${index}`, value: `type${index}` })),
      },
    }),
  ],
});

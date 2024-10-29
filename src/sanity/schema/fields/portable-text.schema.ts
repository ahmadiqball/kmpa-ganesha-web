import { defineType } from 'sanity';

export const portableTextSchema = defineType({
  name: 'portableText',
  type: 'array',
  of: [{ type: 'block' }],
});

import { FaPeopleGroup } from 'react-icons/fa6';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const executiveBoardSchema = defineType({
  name: 'executiveBoard',
  type: 'object',
  icon: FaPeopleGroup,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'members',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'member',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'memberID',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'position',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              type: 'image',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});

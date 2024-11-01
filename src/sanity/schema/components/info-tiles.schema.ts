import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const infoTilesSchema = defineType({
  name: 'infoTiles',
  type: 'object',
  icon: BsFillGrid3X2GapFill,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
    }),
    defineField({
      name: 'tiles',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'tile',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
            }),
            defineField({
              name: 'icon',
              type: 'iconPicker',
            }),
            defineField({
              name: 'text',
              type: 'text',
            }),
          ],
        }),
      ],
    }),
  ],
});

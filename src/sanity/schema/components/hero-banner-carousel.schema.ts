import { defineArrayMember, defineField, defineType } from 'sanity';

export const heroBannerCarouselSchema = defineType({
  name: 'heroBannerCarousel',
  type: 'object',
  fields: [
    defineField({
      name: 'carousel',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'carouselItem',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'pretitle',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              type: 'string',
            }),
            defineField({
              name: 'backgroundImage',
              type: 'image',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'mapImage',
              type: 'image',
            }),
            defineField({
              name: 'summaryTitle',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'summarySubtitle',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'summaryText',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});

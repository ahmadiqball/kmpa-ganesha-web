import { PiFlagBanner } from 'react-icons/pi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const heroBannerCarouselSchema = defineType({
  name: 'heroBannerCarousel',
  type: 'object',
  icon: PiFlagBanner,
  fields: [
    defineField({
      name: 'carousel',
      type: 'array',
      validation: (Rule) => Rule.min(1).required(),
      of: [
        defineArrayMember({
          name: 'carouselItem',
          type: 'object',
          validation: (Rule) => Rule.required(),
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
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'summaryText',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
});

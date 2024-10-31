import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageSchema = defineType({
  name: 'page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'components',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'heroBannerCarousel',
        }),
        defineArrayMember({
          type: 'recentArticles',
        }),
        defineArrayMember({
          type: 'highlightCard',
        }),
        defineArrayMember({
          type: 'divider',
        }),
        defineArrayMember({
          type: 'heroBannerText',
        }),
        defineArrayMember({
          type: 'fullSpanMedia',
        }),
        defineArrayMember({
          type: 'articleHighlight',
        }),
        defineArrayMember({
          type: 'infoBlock',
        }),
        defineArrayMember({
          type: 'infoTiles',
        }),
        defineArrayMember({
          type: 'imageBanner',
        }),
        defineArrayMember({
          type: 'gallery',
        }),
        defineArrayMember({
          type: 'infoBreakdown',
        }),
        defineArrayMember({
          type: 'productHighlight',
        }),
        defineArrayMember({
          type: 'executiveBoard',
        }),
      ],
    }),
  ],
});

import { kebabCase } from 'lodash';
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
        slugify: (string) => {
          return `/${kebabCase(string)}`;
        },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'components',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'articleHighlight',
        }),
        defineArrayMember({
          type: 'divider',
        }),
        defineArrayMember({
          type: 'executiveBoard',
        }),
        defineArrayMember({
          type: 'fullSpanMedia',
        }),
        defineArrayMember({
          type: 'gallery',
        }),
        defineArrayMember({
          type: 'heroBannerCarousel',
        }),
        defineArrayMember({
          type: 'heroBannerText',
        }),
        defineArrayMember({
          type: 'highlightCard',
        }),
        defineArrayMember({
          type: 'imageBanner',
        }),
        defineArrayMember({
          type: 'infoBlock',
        }),
        defineArrayMember({
          type: 'infoBreakdown',
        }),
        defineArrayMember({
          type: 'infoTiles',
        }),
        defineArrayMember({
          type: 'productHighlight',
        }),
        defineArrayMember({
          type: 'recentArticles',
        }),
      ],
    }),
  ],
});

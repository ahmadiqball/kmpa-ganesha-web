import { kebabCase } from 'lodash';
import { defineArrayMember, defineField, defineType } from 'sanity';

const PAGE_COMPONENT_TYPES = [
  'articleHighlight',
  'divider',
  'executiveBoard',
  'fullSpanMedia',
  'gallery',
  'heroBannerCarousel',
  'heroBannerText',
  'highlightCard',
  'imageBanner',
  'infoBlock',
  'infoBreakdown',
  'infoTiles',
  'pageHighlight',
  'productHighlight',
  'recentArticles',
];

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
      of: PAGE_COMPONENT_TYPES.map((type) => defineArrayMember({ type })),
    }),
  ],
});

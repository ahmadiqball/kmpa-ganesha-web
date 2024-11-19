import { groq } from 'next-sanity';

import type { PageQueryResult } from '../sanity.entity';

import { client } from '../lib/client';

export async function useSanityPage(slug?: Array<string>) {
  const pageQuery = groq`
    *[_type == 'page' && url.current == $url][0] {
      ...,
      components[] {
        ...,
        _type == 'recentArticles' => {
          ...,
          articles[]->
        },
        _type == 'highlightCard' => {
          ...,
          cards[]->
        },
        _type == 'articleHighlight' => {
          ...,
          article->
        }
      }
    }
  `;

  return client.fetch<PageQueryResult>(pageQuery, {
    url: `/${slug?.join('/') || ''}`,
  }, {
    cache: 'no-store',
  });
};

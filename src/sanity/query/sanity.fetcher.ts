import { usePathname } from 'next/navigation';
import { createClient, groq } from 'next-sanity';

import { apiVersion, dataset, projectId } from '~~/sanity/env';

import type { PageQueryResult } from '../sanity.entity';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
});

export async function useSanityPage() {
  const url = usePathname();

  const pageQuery = groq`
    *[_type == 'page' && url.current == $url][0]
  `;

  return client.fetch<PageQueryResult>(pageQuery, {
    url,
  });
};

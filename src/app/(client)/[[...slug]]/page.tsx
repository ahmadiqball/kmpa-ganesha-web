import { notFound } from 'next/navigation';

import { BLOCK_COMPONENTS } from '~/components/blocks/block.components';
import { useSanityPage } from '~/sanity/query/sanity.fetcher';

interface PageProps {
  params: { slug?: string };
};

export default async function Page({ params }: PageProps) {
  const page = await useSanityPage(params.slug);

  if (!page) {
    notFound();
  };

  return (
    <main>
      { page.components?.map((component) => {
        const Comp = BLOCK_COMPONENTS[component._type];

        if (Comp) {
          return <Comp { ...component } />;
        } else {
          return null;
        }
      }) }
    </main>
  );
}

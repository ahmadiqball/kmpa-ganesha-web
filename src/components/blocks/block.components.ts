import type React from 'react';

import type { PageComponentTypes, PickPageComponent } from '~/sanity/lib/page-component.entity';

import { BlockFullSpanMedia } from './components/block-full-span-media';
import { BlockHeroBannerCarousel } from './components/block-hero-banner-carousel';
import { BlockHeroBannerText } from './components/block-hero-banner-text';
import { BlockHighlightCard } from './components/block-highlight-card';
import { BlockRecentArticles } from './components/block-recent-articles';

export type BlockComponents = {
  [T in PageComponentTypes]?: React.FC<PickPageComponent<T>>
};

export const BLOCK_COMPONENTS: BlockComponents = {
  heroBannerCarousel: BlockHeroBannerCarousel,
  heroBannerText: BlockHeroBannerText,
  fullSpanMedia: BlockFullSpanMedia,
  recentArticles: BlockRecentArticles,
  highlightCard: BlockHighlightCard,
};

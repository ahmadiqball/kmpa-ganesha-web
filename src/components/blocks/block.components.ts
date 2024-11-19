import type React from 'react';

import type { PageComponentTypes, PickPageComponent } from '~/sanity/lib/page-component.entity';

import { BlockArticleHighlight } from './components/block-article-highlight';
import { BlockExecutiveBoard } from './components/block-executive-board';
import { BlockFullSpanMedia } from './components/block-full-span-media';
import { BlockHeroBannerCarousel } from './components/block-hero-banner-carousel';
import { BlockHeroBannerText } from './components/block-hero-banner-text';
import { BlockHighlightCard } from './components/block-highlight-card';
import { BlockImageBanner } from './components/block-image-banner';
import { BlockInfoBlock } from './components/block-info-block';
import { BlockInfoBreakdown } from './components/block-info-breakdown';
import { BlockInfoTiles } from './components/block-info-tiles';
import { BlockProductHighlight } from './components/block-product-highlight';
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
  infoBlock: BlockInfoBlock,
  productHighlight: BlockProductHighlight,
  articleHighlight: BlockArticleHighlight,
  infoTiles: BlockInfoTiles,
  infoBreakdown: BlockInfoBreakdown,
  executiveBoard: BlockExecutiveBoard,
  imageBanner: BlockImageBanner,
};

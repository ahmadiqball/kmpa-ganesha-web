import type { SchemaTypeDefinition } from 'sanity';

import { articleSchema } from './article.schema';
import { articleHighlightSchema } from './components/article-highlight.schema';
import { dividerSchema } from './components/divider.schema';
import { executiveBoardSchema } from './components/executive-board.schema';
import { fullSpanMediaSchema } from './components/full-span-media.schema';
import { gallerySchema } from './components/gallery.schema';
import { heroBannerCarouselSchema } from './components/hero-banner-carousel.schema';
import { heroBannerTextSchema } from './components/hero-banner-text.schema';
import { highlightCardSchema } from './components/highlight-card.schema';
import { imageBannerSchema } from './components/image-banner.schema';
import { infoBlockSchema } from './components/info-block.schema';
import { infoBreakdownSchema } from './components/info-breakdown.schema';
import { infoTilesSchema } from './components/info-tiles.schema';
import { pageHighlightSchema } from './components/page-highlight.schema';
import { productHighlightSchema } from './components/product-highlight.schema';
import { recentArticlesSchema } from './components/recent-articles.schema';
import { colorPickerSchema } from './fields/color-picker.schema';
import { portableTextSchema } from './fields/portable-text.schema';
import { pageSchema } from './page.schema';

export const schema: { types: Array<SchemaTypeDefinition> } = {
  types: [
    pageSchema,
    articleSchema,

    colorPickerSchema,
    portableTextSchema,

    articleHighlightSchema,
    dividerSchema,
    executiveBoardSchema,
    fullSpanMediaSchema,
    gallerySchema,
    heroBannerCarouselSchema,
    heroBannerTextSchema,
    highlightCardSchema,
    imageBannerSchema,
    infoBlockSchema,
    infoBreakdownSchema,
    infoTilesSchema,
    pageHighlightSchema,
    productHighlightSchema,
    recentArticlesSchema,
  ],
};

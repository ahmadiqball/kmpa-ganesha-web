'use client';

import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { iconPicker } from 'sanity-plugin-icon-picker';

import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schema';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/admin',
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
    iconPicker(),
  ],
  projectId,
  schema,
});

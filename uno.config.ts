import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        kmpa: () => import('./src/designs/icons/kmpa.json').then((i) => i.default),
      },
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  theme: {
    fontFamily: {
      florest: 'Florest',
      manrope: 'Manrope',
      poppins: 'Poppins',
    },
  },

  transformers: [
    transformerDirectives(),
  ],
});

import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});


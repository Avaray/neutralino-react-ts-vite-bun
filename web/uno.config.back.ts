import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  rules: [
    ['i-wouter', {
      'mask': 'url(src/assets/icon_duotone_optimized.svg) no-repeat center / contain',
      'background-image': 'linear-gradient(45deg, var(--gradient-from, #47C9FF), var(--gradient-to, #BD34FE))',
    }],
    ['i-daisyui', {
      'background-image': 'url(src/assets/daisyui.svg)',
      'background-size': 'contain',
      'background-repeat': 'no-repeat',
      'background-position': 'center'
    }]
  ],
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

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        base: ['18px', { lineHeight: '28px' }],
      },
    },
  },
  plugins: [],
} satisfies Config

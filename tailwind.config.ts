import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        harvest: {
          gold: '#C8922A',
          cream: '#FAF6EF',
          bark: '#3B2A1A',
          earth: '#7A5C3E',
          green: '#4A6741',
          white: '#FFFFFF',
          offwhite: '#F5F0E8',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '64rem',
      },
    },
  },
  plugins: [],
}

export default config

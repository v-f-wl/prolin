import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'main': '1fr 2.5fr 1fr',
        'notification': '24px 1fr',
        'login': '1.6fr 1fr',
        'signup': '1fr 1.6fr',
      },
      gridTemplateRows: {
        'for-gradient': '1fr auto'
      }
    },
  },
  plugins: [],
}
export default config

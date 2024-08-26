import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lobby-gradient': 'linear-gradient(45deg, #818CF8, #14B8A6)',
        'lobby-space-gradient': 'linear-gradient(45deg, rgba(83, 214, 255, 0.2), rgba(152, 185, 255, 0.2), rgba(195, 167, 255, 0.2))',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        'admin-lobby': '300px 1fr',
        'user-lobby': '1fr 300px',
      }
    },
  },
  plugins: [],
};
export default config;

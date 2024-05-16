import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'status': '3fr 1fr',
      },
      colors: {
        foregroundLight: '#fff',
        foregroundDark: '#131315',
        lightGreen: '#98cc00',
        darkGreen: '#D5FE3E',
        lightBg: '#F1F1F3',
        darkBg: '#292929',
      },
    },
  },
  plugins: [],
};
export default config;

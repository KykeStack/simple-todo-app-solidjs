import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'regal-gray': 'rgb(221,221,221)',
        'intense-gray': 'rgb(139,139,139)'
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F4F6FA',
          100: '#F7F7F7',
          200: '#E2E2E2',
          300: '#CECECE',
          700: '#3B3B3B',
          800: '#3A3A3A',
          900: '#1F1F1F',
        },
        primary: {
          700: '#772CE8',
          '700/5': 'rgba(119, 44, 232, 0.25)',
          900: '#4C2B77',
        },
        secondary: {
          200: '#C5D3DD',
          700: '#32D1F7',
          900: '#4C2B77',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          // eslint-disable-next-line global-require
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#772CE8',
          secondary: '#32D1F7',
        },
      },
    ],
  },
};

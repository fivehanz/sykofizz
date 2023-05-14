/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

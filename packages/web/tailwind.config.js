/** @type {import('tailwindcss').Config} */

const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, './app/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, './components/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  plugins: [require('daisyui')],
};

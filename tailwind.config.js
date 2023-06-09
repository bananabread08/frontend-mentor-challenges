/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'qr-light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
        'qr-gray-blue': 'hsl(var(--gray-blue) / <alpha-value>)',
        'qr-dark-blue': 'hsl(var(--dark-blue) / <alpha-value>)',
        'pr-dark-cyan': 'hsl(var(--pr-dark-cyan) / <alpha-value>)',
        'pr-cream': 'hsl(var(--pr-cream) / <alpha-value>)',
        'pr-dark-blue': 'hsl(var(--pr-dark-blue) / <alpha-value>)',
        'pr-dark-grayish-blue':
          'hsl(var(--pr-dark-grayish-blue) / <alpha-value>)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        fraunces: ['var(--font-fraunces)'],
      },
    },
  },
  plugins: [],
};

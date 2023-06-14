/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(700px, 1fr))',
      },
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
        'rs-light-red': 'hsl(var(--rs-light-red) / <alpha-value>)',
        'rs-orange-yellow': 'hsl(var(--rs-orange-yellow) / <alpha-value>)',
        'rs-green-teal': 'hsl(var(--rs-green-teal) / <alpha-value>)',
        'rs-cobalt-blue': 'hsl(var(--rs-cobalt-blue) / <alpha-value>)',
        'rs-light-slateblue': 'hsl(var(--rs-light-slateblue))',
        'rs-light-royalblue': 'hsl(var(--rs-light-royalblue))',
        'rs-violetblue': 'hsla(var(--rs-violetblue) , 1)',
        'rs-persianblue': 'hsla(var(--rs-persianblue) , 0)',
        'rs-paleblue': 'hsl(var(--rs-paleblue) / <alpha-value>)',
        'rs-light-lavender': 'hsl(var(--rs-light-lavender) / <alpha-value>)',
        'rs-dark-grayblue': 'hsl(var(--rs-dark-grayblue) / <alpha-value>)',
        'ac-purple': 'hsl(var(--ac-purple))',
        'ac-lightred': 'hsl(var(--ac-lightred))',
        'ac-offwhite': 'hsl(var(--ac-offwhite))',
        'ac-lightgrey': 'hsl(var(--ac-lightgrey))',
        'ac-smokeygrey': 'hsl(var(--ac-smokeygrey))',
        'ac-offblack': 'hsl(var(--ac-offblack))',
        'ss-red': 'hsl(var(--ss-red))',
        'ss-yellow': 'hsl(var(--ss-yellow))',
        'ss-darkcyan-500': 'hsl(var(--ss-darkcyan-500))',
        'ss-darkcyan-300': 'hsl(var(--ss-darkcyan-300))',
        'ss-darkcyan-100': 'hsl(var(--ss-darkcyan-100))',
        'ss-darkblue-500': 'hsl(var(--ss-darkblue-500))',
        'ss-darkblue-300': 'hsl(var(--ss-darkblue-300))',
        'ss-darkblue-100': 'hsl(var(--ss-darkblue-100))',
        'ss-grayblue': 'hsl(var(--ss-grayblue))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        fraunces: ['var(--font-fraunces)'],
        barlow: ['var(--font-barlow)'],
      },
    },
  },
  plugins: [],
};

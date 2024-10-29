/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      // => @media (min-width: 400px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'max-sm': {'max': '400px'},
      // => @media (max-width: 400px) { ... }

      'max-md': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'max-lg': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      'max-xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }

      'max-2xl': {'max': '1536px'},
      // => @media (max-width: 1536px) { ... }
    },
  },
  plugins: [],
}



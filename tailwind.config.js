/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': '1440px',
      // => @media (max-width: 1535px) { ... }

      'xl': '1240px',
      // => @media (max-width: 1279px) { ... }

      'lg': '1024px',
      // => @media (max-width: 1023px) { ... }

      'md2' : '900px',
      // => @media (max-width : 900px) 

      'md': '768px',
      // => @media (max-width: 767px) { ... }

      'sm': '640px',
      // => @media (max-width: 639px) { ... }

      'xs': '450px',
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

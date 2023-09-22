/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',   
        'sm': '0.875rem',  
        'base': '1rem',    
        'lg': '1.125rem',  
        'xl': '1.25rem',  
      },
      fontFamily: {
        inter: ['Inter'], 
        poppins: ['Poppins'], 
        quicksand: ['Quicksand']
      },
      colors: {
        'pink': '#EBDEF0',
        'red': '#a12847cc',
        'lightGrey': '#190e1466',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

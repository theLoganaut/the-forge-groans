/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'fade-out': {
          '0%': { backgroundColor: 'rgba(255, 255, 255, 1)' }, 
          '100%': { backgroundColor: 'rgba(255, 255, 255, 0)' }, 
        },
        'fadeIn': {
          '0%': { backgroundColor: 'rgba(255, 255, 255, 0)' }, 
          '100%': { backgroundColor: 'rgba(255, 255, 255, 1)' }, 
        },
        'opacity-out': {
          '0%': { opacity: '100%' }, 
          '100%': { opacity: '0%' }, 
        },
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out forwards',
        'fade-out': 'fade-out 0.5s ease-in-out forwards',
        'opacity-out': 'opacity-out 0.5s ease-in-out forwards',
      },
      animationDelay: {
        500: "500ms",
      },
    },
  },
  plugins: [],
};

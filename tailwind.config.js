/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'd-black': '#333333',
        'd-pink': '#F67599',
        'd-gray': 'F0F0F5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

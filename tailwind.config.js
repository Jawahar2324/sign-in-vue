/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '75vh': '75vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(#ecf2f6, #ecf2f6) padding-box, 
          linear-gradient(0deg, rgb(236, 242, 246), rgba(179, 174, 227, 0.4427), rgb(230, 227, 255)) border-box
        `,
      },
    },
  },
  plugins: [],
};



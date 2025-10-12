/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Academy', 'Bebas Neue', 'Inter', 'system-ui', 'sans-serif'],
        roxasBldg: ['Race Sport', 'Bebas Neue', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        brand: ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#1f7a67',
          mint: '#7FFFD4'
        }
      },
      dropShadow: {
        glow: '0 4px 30px rgba(0,0,0,0.45)'
      }
    },
  },
  plugins: [],
}

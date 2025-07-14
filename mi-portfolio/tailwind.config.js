/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,html}", // ajusta según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        primary: "#98A6A4",     // gris suave
        secondary: "#C5D9D5",   // verde muy claro
        light: "#DFF2EF",       // fondo muy claro
        darkGray: "#404040",    // gris oscuro
        dark: "#0D0D0D",        // casi negro
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


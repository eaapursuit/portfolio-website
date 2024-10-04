/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#a08679',
      },
      letterSpacing: {
        '10%': '0.1em',
      },
      borderRadius: {
        full: '100%',
      },
      boxShadow: {
        'btn': '0px 4.42184px 107.23px rgba(139, 69, 19, 0.51)',
      },
      backgroundImage: {
        site: "url('./assets/new-bg.jpeg')",
        about: "url('./assets/headshot.png')",
        services: "url('./assets/headshot.png')",
        'btn-gradient': 'linear-gradient(92.23deg, #8b0000 21.43%, #a0522d 50.63%, #8b4513 100%, #d2691e 117.04%)',
        'btn-gradient-hover': 'linear-gradient(92.23deg, #d2691e 21.43%, #8b4513 50.63%, #a0522d 100%, #8b0000 117.04%)',
      },
    },
  },
  plugins: [],
}


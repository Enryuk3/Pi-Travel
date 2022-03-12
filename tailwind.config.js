module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
			  'yosemite': "url('../img/yosemite.jpg')",
			  'LA': "url('../img/LA.jpg')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'chicago': "url('../img/chicago.jpg')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9'
      }),
      textColor: theme => ({
        ...theme('colors'),
        'secondary': '#8FA206',
        'primary': '#CC2D4A',
        'terciary': '#61AEC9'
      }),
      fontFamily:{
        Montserrat: ['Montserrat','san-serif']
      }
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extends:{},
  },
  plugins: [],
}

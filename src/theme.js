
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

export const theme = createTheme(
  {
    primary: '#ffb238',
    secondary: '#744C9E',
    tertiary: 'white',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);
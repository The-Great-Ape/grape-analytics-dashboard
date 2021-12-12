import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f38aff',
    },
    secondary: {
      main: '#90caf9',
    },
    background: {
      default: '#050814',
      paper: '#13151c',
    },
  },
  typography: {
    fontFamily: 'Gilroy Medium, sans-serif',
    h1: {
      fontFamily: 'Gilroy Bold, sans-serif',
    },
    h2: {
      fontFamily: 'Gilroy Bold, sans-serif',
    },
    h3: {
      fontFamily: 'Gilroy Bold, sans-serif',
    },
    h4: {
      fontFamily: 'Gilroy Bold, sans-serif',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

export default theme;

// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d66d3',  // OK
      light: '#0d66d345', //OLD
      dark: '#3b5563', //OLD
      contrastText: '#fff', // ???
    },
    secondary: {
      main: '#76c5f9', // OK
      light: '#76c5f940', //OLD
      dark: '#111827', // OLD
      contrastText: '#fff', //???
    },
    error: {
      main: '#f44336', //OLD
    },
    warning: {
      main: '#ff9800', //OLD
    },
    info: {
      main: '#2196f3', //OLD
    },
    success: {
      main: '#0af512', //OK
    },
    background: {
      light:"#152D37",//OK
      dark:"#0B171C", //OK
      default: '#111827', //OLD
      paper: '#ffffff', //OLD
    },
    text: {
      primary: '#fff', //OK
      secondary:'#8C8B8C',  //OK
      tertiary: '#0B171C',
    },
  },
  typography: {
    fontFamily: '"Rajdhani", "Arial", sans-serif',
  },
});

export default theme;

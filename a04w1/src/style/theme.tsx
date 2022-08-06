import {  createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#40E0D0',
      dark: '#1DB4A5',
    },
    secondary: {
      main: '#1A3440',
    },
    warning:{
      main:"#EF976B",
    },
    error:{
      main:"#EF6B6B",
    },
    divider: '#CACACA',
  },
  typography: {
    fontSize: 18,
    fontWeightLight: 200,
    h1: {
      fontSize: 96,
      lineHeight: "150%",
      fontWeight: 600,
    },
    h2: {
      fontSize: 48,
      lineHeight: "150%",
      fontWeight: 600,
    },
    h3: {
      fontSize: 34,
      lineHeight: "150%",
      fontWeight: 600,
    },
    h4: {
      fontSize: 32,
      lineHeight: "150%",
      fontWeight: 600,
    },
    h5: {
      fontSize: 24,
      lineHeight: "150%",
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      lineHeight: "150%",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: "150%",
    },
    subtitle2: {
      fontSize: 15,
    },
    body1: {
      fontSize: 16,
    },
    button: {
      fontSize: 15,
      textTransform: 'none',
    },
  },
});

export default theme;
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Palette } from '@mui/icons-material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {main:'#f7931a'},
    // secondary: {main:'#f7931a'},
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiCard:{
      styleOverrides:{
        root: {
          backgroundColor: '#f7931a'
        }
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root: {
          backgroundColor: '#f7931a'
        }
      }
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;

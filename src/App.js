import React from 'react';
import FullPage from './components/FullPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#548c70',
      main: '#1d5e5e',
      dark: '#00341e',
      contrastText: 'rgb(149, 134, 134)',
    },
    secondary: {
      light: '#74b8c7',
      main: '#438896',
      dark: '#035b68',
      contrastText: 'rgb(149, 134, 134)',
    },
  },
  typography: {
    fontFamily: [
      'Roboto Mono',
       'monospace'
    ].join(','),
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <FullPage />
      </ThemeProvider>
  );
}

export default App;

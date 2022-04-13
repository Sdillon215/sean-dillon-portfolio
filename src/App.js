import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Nav from './components/Nav';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#548c70',
      main: '#1d5e5e',
      dark: '#00341e',
      contrastText: '#000',
    },
    secondary: {
      light: '#74b8c7',
      main: '#438896',
      dark: '#035b68',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <ReactPageScroller>
        <section id="first-section">One</section>
        <section id="second-section">Beautiful</section>
        <section id="third-section">Full-Page</section>
        <section id="fourth-section">Slideshow</section>
      </ReactPageScroller>
    </ThemeProvider>
  );
}

export default App;

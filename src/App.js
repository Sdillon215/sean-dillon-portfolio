import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#548c70',
      main: '#1d5e5e',
      dark: '#00341e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#74b8c7',
      main: '#438896',
      dark: '#035b68',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Advent Pro',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <ReactPageScroller>
        <SectionOne />
        <section id="second-section"><p>Section 2</p></section>
        <section id="third-section">Full-Page</section>
        <section id="fourth-section">Slideshow</section>
      </ReactPageScroller>
    </ThemeProvider>
  );
}

export default App;

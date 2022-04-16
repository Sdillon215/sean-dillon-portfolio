import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sean Dillon
          </Typography>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">WORK</Button>
          <Button color="inherit">CONTACT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
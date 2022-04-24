import React from 'react';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SectionOne = (props) => {
  const { handleDownClick } = props;

  return (
    <section id="first-section">
      <div id="home-title">
        <h1>SEAN DILLON</h1>
        <h2>Full Stack Dev | Climber | Desert Rat</h2>
      </div>
      <Button sx={{ marginTop: "auto", marginBottom: "0" }} onClick={handleDownClick}  aria-label="jump to next page">
        <KeyboardDoubleArrowDownIcon sx={{ fontSize: '8vw' }} className='arrow bounce' />
      </Button>
    </section>
  );
}

export default SectionOne;
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function SectionOne() {
  return (
    <section id="first-section" className="first">
      <div id="home-title">
        <h1>SEAN DILLON</h1>
        <h2>Full Stack Dev | Climber | Desert Rat</h2>
      </div>
      <KeyboardDoubleArrowDownIcon sx={{ fontSize: '8vw' }} className='arrow bounce' />
    </section>
  );
}

export default SectionOne;
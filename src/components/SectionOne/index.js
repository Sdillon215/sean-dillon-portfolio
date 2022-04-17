import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function SectionOne() {
  return (
    <section id="first-section" className="first">
      <div id="home-title">
        <h2>SEAN DILLON</h2>
        <h3>Full Stack Developer | Rock Climber | Desert Rat</h3>
      </div>
      <KeyboardDoubleArrowDownIcon sx={{ fontSize: '8vw' }} className='arrow bounce' />
    </section>
  );
}

export default SectionOne;
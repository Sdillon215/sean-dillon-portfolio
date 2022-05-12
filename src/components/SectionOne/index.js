import React from 'react';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import { Jtree } from '../../assets/images';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SectionOne = (props) => {
  const { handleDownClick } = props;
 
  return (
    <BackgroundImage
      useChild
      src={Jtree}
      width='1060px'
      height='795px'
      isResponsive
      lazyLoad
      transitionTime='1.2s'>
      <section className="first-section">
        <div id="home-title">
          <h1>SEAN DILLON</h1>
          <h2>Full Stack Dev | Climber | Desert Rat</h2>
        </div>
        <Button sx={{ marginTop: "auto", marginBottom: "0" }} onClick={handleDownClick} aria-label="jump to next page">
          <KeyboardDoubleArrowDownIcon sx={{ fontSize: '8vw' }} className='arrow bounce' />
        </Button>
      </section>
    </BackgroundImage>
  );
}

export default SectionOne;
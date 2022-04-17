import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function SectionOne() {
  
  return (
    <section id="first-section" className="first">
      <div id="home-title">
        <h2>SEAN DILLON</h2>
        <h3>Full Stack Developer | Rock Climber | Desert Rat</h3>
      </div>
      <KeyboardDoubleArrowDownIcon sx={{fontSize: '8vw'}} className='arrow bounce' />
    </section>
  );
}

export default SectionOne;
{/* <div class="one-item-one card">
  <img class="card-img" src={Portrait} />
  <p>
    Hi my name is Sean Dillon.
    I'm a Full Stack Developer!
  </p>
</div>
<div id="about-card" class="card">
  <h2>Hi. I'm Sean.</h2>
  <p>
    My name is Sean Dillon and I am a Full Stack Web Developer.
    I was drawn to this field of work by the ability to work remotely and the freedom that allows.
    My introduction to Web developement started with a boot camp through The University of
    Utah. As I am learning new skills and technologies I am finding a passion in the creative proccess of building web
    applications. This skill set gives me the freedom work from anywhere in the world which has given me the ability to pursue
    other passions such as climbing and traveling. These passions fuel each other and the result is awesome code and time spent in the most beautiful
    places in the world!
  </p>
</div> */}
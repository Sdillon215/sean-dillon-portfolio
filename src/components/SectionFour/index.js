import React from 'react';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import { RedSun } from '../../assets/images';

import ContactIcons from "../ContactIcons";
import ContactForm from '../ContactForm';

function SectionFour() {
  return (
    <BackgroundImage
      useChild
      src={RedSun}
      width='1340px'
      height='893px'
      isResponsive
      lazyLoad>
      <section id="fourth-section">
        <ContactIcons />
        <ContactForm />
      </section>
    </BackgroundImage>
  );
}

export default SectionFour;
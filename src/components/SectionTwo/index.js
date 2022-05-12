import React from 'react';
import { BackgroundImage } from 'react-image-and-background-image-fade';
import { Gambler } from '../../assets/images';

function SectionTwo(props) {

    return (
        <section id="section-two">
            <BackgroundImage
                useChild
                lazyLoading
                src={Gambler}
            >
                <div id="about-img-cont">
                </div>
            </BackgroundImage>
            <div id="about-text-cont">
                <h2>Hi. I'm Sean.</h2>
                <p>
                    I like to climb rocks and write code! I have been developing web applications for two years and recently graduated from The University of Utah's Full Stack Development boot camp. For years I have dreamt of traveling full-time and climbing all over the world but this goal was unattainable in my previous career field. Two years ago I came to the conclusion that I would no longer determine what is possible based on circumstance but rather adjust the circumstance until the goal becomes attainable. I have applied this ideal to my education and the projects that I work on. <span id="italic">The only limitation of the applications we can build is our perception of what is possible!</span> Starting a career in web development began as a means to pursue my passions but ultimately it became one of them. I am actively looking for new projects and work. Please feel free to reach out with any comments, inquiries, or opportunities!
                </p>
            </div>
        </section>
    );
}

export default SectionTwo;
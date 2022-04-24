import React from 'react';
import {
    OuterLimits,
    Portrait,
    CityORox
} from '../../assets/images';

function SectionTwo(props) {
    // conditionally render text to trigger animations when page enters viewport
    let typeWriter = false;
    if (props.props === 1) {
        typeWriter = true;
    }

    return (
        <section id="section-two">
            <div className="two-top-cont">
                <div className="about-card">
                    <img src={OuterLimits} alt="Rock climbing Yosemite National Park" />
                </div>
                <div className="about-card">
                    <img src={Portrait} alt="portrait" />
                </div>
                <div className="about-card">
                    <img src={CityORox} alt="Rock climbing Idaho" />
                </div>
            </div>
            <div className="two-bottom-cont">
                {typeWriter ? (
                    <>
                        <div className="type-cont">
                            <h2 className='typed-out'>Hi. I'm Sean. I like to climb rocks & write code!</h2>
                        </div>
                        <div>
                            <p id="about-text" className="fade-in-text">
                                I have been developing web applications for two years and recently graduated from The University of Utah's Full Stack Development boot camp. For years I have dreamt of traveling full-time and climbing all over the world but this goal was unattainable in my previous career field. Two years ago I came to the conclusion that I would no longer determine what is possible based on circumstance but rather adjust the circumstance until the goal becomes attainable. I have applied this ideal to my education and the projects that I work on. <span id="italic">The only limitation of the applications we can build is our perception of what is possible!</span> Starting a career in web development began as a means to pursue my passions but ultimately it became one of them. I am actively looking for new projects and work. Please feel free to reach out with any comments, inquiries, or opportunities!
                            </p>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </section>
    );
}

export default SectionTwo;
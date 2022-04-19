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
                            <h3 className='typed-out'>Hi. I'm Sean.</h3>
                        </div>
                        <div>
                            <p className="fade-in-text">
                                I am a Full Stack Web Developer. I was drawn to this field of work by the ability to work remotely and the freedom that allows. My introduction to Web developement started with a boot camp through The University of Utah. As I am learning new skills and technologies I am finding a passion in the creative proccess of building web applications. This skill set gives me the freedom work from anywhere in the world which has given me the ability to pursue other passions such as climbing and traveling. These passions fuel each other and the result is awesome code and time spent in the most beautiful places in the world!
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
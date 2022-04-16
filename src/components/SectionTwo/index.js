import React from 'react';
import SecondPageScroll from '../SecondPageScroll';


function SectionTwo() {
    return (
        <section id="section-two">
            <div id="left-cont">
                <div id="left-two-top">

                </div>
                <div id="left-two-bottom">
                    <h2>Project title</h2>
                    <p>link</p>
                    <p>github</p>
                    <h2>technologies Used</h2>
                </div>
            </div>
            <div class="section-two-cont">
                <div id="right-two">
                    <SecondPageScroll />
                </div>
            </div>
        </section>
    );
}

export default SectionTwo;
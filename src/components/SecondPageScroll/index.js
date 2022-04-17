import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { DillonDash } from '../../assets/images'

function SecondPageScroll() {
    const projects = [
        {
            name: 'Dillon Floral Employee Dashboard',
            github: 'https://github.com/Sdillon215/dillon-employee-dashboard',
            url: 'https://dillon-dash.herokuapp.com/',
            img: DillonDash,
            description: 'Employee dashboard bluh blah blah it does the stuff and the things and what not and other stuff'
        },
        {
            name: 'Dillon Floral Employee Dashboard',
            github: 'https://github.com/Sdillon215/dillon-employee-dashboard',
            url: 'https://dillon-dash.herokuapp.com/',
            img: DillonDash,
            description: 'Employee dashboard bluh blah blah it does the stuff and the things and what not and other stuff'
        },
        {
            name: 'Dillon Floral Employee Dashboard',
            github: 'https://github.com/Sdillon215/dillon-employee-dashboard',
            url: 'https://dillon-dash.herokuapp.com/',
            img: DillonDash,
            description: 'Employee dashboard bluh blah blah it does the stuff and the things and what not and other stuff'
        }
    ]
    return (
        <>
            <ReactPageScroller>
                <section className="second-scroll-cont">
                    <div>
                        <div className="two-scroll-sect">
                            <div className="about-card">
                            </div>
                            <div className="about-card">
                            </div>
                        </div>
                        <div className="two-scroll-sect two-scroll-sect-bottom">
                            right one
                        </div>
                    </div>
                </section>
                <section className="second-scroll-cont">
                    <div>
                        <div className="two-scroll-sect">
                            left two
                        </div>
                        <div classname="two-scroll-sect two-scroll-sect-bottom">
                            right two
                        </div>
                    </div>
                </section>
            </ReactPageScroller>
        </>
    );
}

export default SecondPageScroll;
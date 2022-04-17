import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import { DillonDash } from '../../assets/images'

function ThirdPageScroll() {
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
                <section className="three-scroll-cont">
                    <div>
                        <div className="three-scroll-sect">
                            <div className="proj-card">
                            </div>
                            <div className="proj-card">
                            </div>
                        </div>
                        <div className="three-scroll-sect-bottom">
                            bottom 1
                        </div>
                    </div>
                </section>
                <section className="three-scroll-cont">
                    <div>
                        <div className="three-scroll-sect">
                            <div className="proj-card">
                            </div>
                            <div className="proj-card">
                            </div>
                        </div>
                        <div className="three-scroll-sect-bottom">
                            bottom 2
                        </div>
                    </div>
                </section>
                <section className="three-scroll-cont">
                    <div>
                        <div className="three-scroll-sect">
                            <div className="proj-card">
                            </div>
                            <div className="proj-card">
                            </div>
                        </div>
                        <div className="three-scroll-sect-bottom">
                            bottom 3
                        </div>
                    </div>
                </section>
                <section className="three-scroll-cont">
                    <div>
                        <div className="three-scroll-sect">
                            <div className="proj-card">
                            </div>
                            <div className="proj-card">
                            </div>
                        </div>
                        <div className="three-scroll-sect-bottom">
                            bottom 4
                        </div>
                    </div>
                </section>
            </ReactPageScroller>
        </>
    );
}

export default ThirdPageScroll;
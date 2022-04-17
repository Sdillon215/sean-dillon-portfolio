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
                {projects.map((project) => (
                    <section className="three-scroll-cont">
                        <div>
                            <div className="three-scroll-sect">
                                <div className="proj-card">
                                    <img src={project.img} alt={project.name} />
                                    <h2>{project.name}</h2>
                                </div>
                            </div>
                            <div className="three-scroll-sect-bottom">
                                <div className="info-card">
                                    <h3>Purpose</h3>
                                    <p>{project.description}</p>
                                </div>
                                <div className="info-card">
                                    <h3>Tech</h3>
                                    <li>This tech</li>
                                    <li>That tech</li>
                                    <li>other tech</li>
                                </div>
                                <div className="info-card">
                                    <h3>Links</h3>
                                    <p>{project.github}</p>
                                    <p>{project.url}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </ReactPageScroller>
        </>
    );
}

export default ThirdPageScroll;
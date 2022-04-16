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
        <div className="proj-section">
            <ReactPageScroller>
                {/* {projects.map((project) => (
                    <div className="proj-scroll">
                        <img src={project.img} />
                        <h2>{project.name}</h2>
                    </div>
                ))} */}
            </ReactPageScroller>
        </div>
    );
}

export default SecondPageScroll;
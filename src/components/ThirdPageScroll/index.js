import React from 'react';
import ReactPageScroller from 'react-page-scroller';
import Link from '@mui/material/Link';
import { 
    DillonDash,
    Shop,
    EzBud,
    Book
 } from '../../assets/images'

function ThirdPageScroll() {
    const projects = [
        {
            name: 'Dillon Floral Employee Dashboard',
            github: 'https://github.com/Sdillon215/dillon-employee-dashboard',
            url: 'https://dillon-dash.herokuapp.com/',
            img: DillonDash,
            description: 'This employee dashboard is a prototype for an application that will ultimately replace the archaic command line programs currently used for sale and purchase order input at my family\'s business Dillon Floral Corporation.',
            tech: ['MongoDB', 'Express', 'React', 'Node', 'Material UI']
        },
        {
            name: 'Shop-Shop',
            github: 'https://github.com/Sdillon215/shop-shop',
            url: 'https://limitless-reaches-14789.herokuapp.com/',
            img: Shop,
            description: 'Shop-Shop is an e-commerce site utilizing React\'s Context API to handle global state and Stripe to manage payments.',
            tech: ['MongoDB', 'Express', 'React', 'Node', 'Stripe']
            
        },
        {
            name: 'Easy Budget',
            github: 'https://github.com/Sdillon215/easy-budget',
            url: 'https://ez-budget-1.herokuapp.com/',
            img: EzBud,
            description: 'Easy Budget is a convenient PWA that can be used to track your transactions with or without internet connection.',
            tech: ['MongoDB', 'Express.js', 'Mongoose', 'IndexedDB']
        },
        {
            name: 'Look 4 Book',
            github: 'https://github.com/Sdillon215/look-4-book',
            url: 'https://look-4-book.herokuapp.com/',
            img: Book,
            description: 'An application that enables users to search for and save books to their profile.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Google API']
        }
    ]
    return (
        <>
            <ReactPageScroller>
                {projects.map((project) => (
                    <section key={project.name} className="three-scroll-cont">
                        <div className="three-scroll-sect">
                            <div className="proj-card">
                                <img src={project.img} alt={project.name} />
                                <h2>{project.name}</h2>
                            </div>
                        </div>
                        <div className="three-scroll-sect-bottom">
                            <div className="info-card">
                                <h3>Tech</h3>
                                {project.tech.map((tek) => (
                                    <p key={tek}>{tek}</p>
                                ))}
                            </div>
                            <div className="info-card">
                                <h3>Purpose</h3>
                                <p>{project.description}</p>
                            </div>
                            <div className="info-card">
                                <h3>Links</h3>
                                <Link target="_blank" rel="noreferrer noopener" href={project.github} color="inherit" underline="hover">
                                    <p>Repo</p>
                                </Link>
                                <Link target="_blank" rel="noreferrer noopener" href={project.url} color="inherit" underline="hover">
                                    <p>Deployed Site</p>
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </ReactPageScroller>
        </>
    );
}

export default ThirdPageScroll;
import React from 'react';
import Link from '@mui/material/Link';
import {
    DillonDash,
    Shop,
    EzBud,
    Book
} from '../../assets/images';

function SectionThree() {
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
    ];

    return (
        <section id="section-three">
            <div className="proj-cards">
                <div className="proj-card hvr-float-shadow" id="card1">
                    <Link target="_blank" rel="noreferrer noopener" href='https://dillon-dash.herokuapp.com/' color="inherit" underline="none">
                        <img src={DillonDash} alt='Dillon Floral Employee Dashboard image/link' />
                    </Link>
                    <div className='proj-info'>
                        <p>Employee Dash | MERN Stack | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/dillon-employee-dashboard' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
                <div className="proj-card hvr-float-shadow" id="card2">
                    <Link target="_blank" rel="noreferrer noopener" href='https://ez-budget-1.herokuapp.com/' color="inherit" underline="none">
                        <img src={EzBud} alt='Budget PWA image/link' />
                    </Link>
                    <div className='proj-info'>
                        <p>Budget PWA | JS & IndexedDb | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/easy-budget' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
            </div>
            <div className="proj-cards">
                <div className="proj-card hvr-float-shadow" id="card3">
                    <Link target="_blank" rel="noreferrer noopener" href='https://limitless-reaches-14789.herokuapp.com/' color="inherit" underline="none">
                        <img src={Shop} alt='E-commerce app image/link' />
                    </Link>
                    <div className='proj-info'>
                        <p>E-Commerce | MERN Stack | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/shop-shop' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
                <div className="proj-card hvr-float-shadow" id="card4">
                    <Link target="_blank" rel="noreferrer noopener" href='https://look-4-book.herokuapp.com/' color="inherit" underline="none">
                        <img src={Book} alt='Google API book search image/link' />
                    </Link>
                    <div className='proj-info'>
                        <p>API Search | MERN & Google API | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/look-4-book' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
            </div>
        </section>
        // {projects.map((project) => (
        //     <section key={project.name} className="three-scroll-cont">
        //         <div className="three-scroll-sect">
        //             <div className="proj-card">
        //                 <img src={project.img} alt={project.name} />
        //                 <h2>{project.name}</h2>
        //             </div>
        //         </div>
        //         <div className="three-scroll-sect-bottom">
        //             <div className="info-card">
        //                 <h3>Tech</h3>
        //                 {project.tech.map((tek) => (
        //                     <p key={tek}>{tek}</p>
        //                 ))}
        //             </div>
        //             <div className="info-card">
        //                 <h3>Purpose</h3>
        //                 <p>{project.description}</p>
        //             </div>
        //             <div className="info-card">
        //                 <h3>Links</h3>
        //                 <Link target="_blank" rel="noreferrer noopener" href={project.github} color="inherit" underline="hover">
        //                     <p>Repo</p>
        //                 </Link>
        //                 <Link target="_blank" rel="noreferrer noopener" href={project.url} color="inherit" underline="hover">
        //                     <p>Deployed Site</p>
        //                 </Link>
        //             </div>
        //         </div>
        //     </section>
        // ))}
    );
}

export default SectionThree;
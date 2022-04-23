import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
    DillonDash,
    Shop,
    EzBud,
    Book
} from '../../assets/images';

function SectionThree() {
    const projects = [
        {
            name: 'Employee Dashboard',
            github: 'https://github.com/Sdillon215/dillon-employee-dashboard',
            url: 'https://dillon-dash.herokuapp.com/',
            img: DillonDash,
            description: 'This employee dashboard is a prototype for an application that will ultimately replace the archaic command line programs currently used for sale and purchase order input at my family\'s business Dillon Floral Corporation.',
            tech: 'MERN Stack | Material UI'
        },
        {
            name: 'E-commerce Web App',
            github: 'https://github.com/Sdillon215/shop-shop',
            url: 'https://limitless-reaches-14789.herokuapp.com/',
            img: Shop,
            description: 'Shop-Shop is an e-commerce site utilizing React\'s Context API to handle global state and Stripe to manage payments.',
            tech: 'MERN Stack | Stripe.js'

        },
        {
            name: 'Budget PWA',
            github: 'https://github.com/Sdillon215/easy-budget',
            url: 'https://ez-budget-1.herokuapp.com/',
            img: EzBud,
            description: 'Easy Budget is a convenient PWA that can be used to track your transactions with or without internet connection.',
            tech: 'Javascript | IndexedDB | Bootstrap'
        },
        {
            name: 'Google API Search',
            github: 'https://github.com/Sdillon215/look-4-book',
            url: 'https://look-4-book.herokuapp.com/',
            img: Book,
            description: 'An application that enables users to search for and save books to their profile.',
            tech: 'MERN Stack | Google API'
        }
    ];

    return (
        <section id="section-three">
            <Box
                sx={{
                    height: '80vh',
                    display: 'grid',
                    columnGap: 1,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                }}
            >
                {projects.map((project) => (
                    <Card key={project.name} sx={{ borderRadius: 0 }}>
                        <div className="image-frame">
                            <div className="text-content">
                                <h3>{project.name}</h3>
                                <p>{project.tech}</p>
                                <div className="proj-btn-cont">
                                    <Link target="_blank" rel="noreferrer noopener" href={project.github} color="inherit" underline="none">
                                        <button className="btn"><GitHubIcon sx={{padingLeft: '5%'}} /> Repo</button>
                                    </Link>
                                    <Link target="_blank" rel="noreferrer noopener" href={project.url} color="inherit" underline="none">
                                        <button className="btn"><OpenInBrowserIcon sx={{padingLeft: '5%'}} />Site</button>
                                    </Link>
                                </div>
                            </div>
                            <img src={project.img} alt="" />
                        </div>
                    </Card>
                ))}
            </Box>
        </section>
    );
}

export default SectionThree;
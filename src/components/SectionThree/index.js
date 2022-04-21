import React from 'react';
import Link from '@mui/material/Link';
import {
    DillonDash,
    Shop,
    EzBud,
    Book
} from '../../assets/images';

function SectionThree() {
    return (
        <section id="section-three">
            <div className="proj-cards">
                <div className="proj-card">
                    <Link className="hvr-float" target="_blank" rel="noreferrer noopener" href='https://dillon-dash.herokuapp.com/' color="inherit" underline="none">
                        <img src={DillonDash} alt='Dillon Floral Employee Dashboard link' />
                    </Link>
                    <div className='proj-info'>
                        <p>Employee Dash | MERN Stack | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/dillon-employee-dashboard' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
                <div className="proj-card">
                    <Link className="hvr-float" target="_blank" rel="noreferrer noopener" href='https://ez-budget-1.herokuapp.com/' color="inherit" underline="none">
                        <img src={EzBud} alt='Budget PWA link' />
                    </Link>
                    <div className='proj-info'>
                        <p>Budget PWA | js & IndexedDb | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/easy-budget' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
            </div>
            <div className="proj-cards">
                <div className="proj-card">
                    <Link className="hvr-float" target="_blank" rel="noreferrer noopener" href='https://limitless-reaches-14789.herokuapp.com/' color="inherit" underline="none">
                        <img src={Shop} alt='E-commerce app link' />
                    </Link>
                    <div className='proj-info'>
                        <p>E-Commerce | MERN Stack | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/shop-shop' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
                <div className="proj-card">
                    <Link className="hvr-float" target="_blank" rel="noreferrer noopener" href='https://look-4-book.herokuapp.com/' color="inherit" underline="none">
                        <img src={Book} alt='Google API book search link' />
                    </Link>
                    <div className='proj-info'>
                        <p>API Search | MERN & Google API | <Link className="hvr-underline-from-left" target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215/look-4-book' color="inherit" underline="none">Repo</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionThree;
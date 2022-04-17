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
                            bottom
                        </div>
                    </div>
                </section>
                <section className="second-scroll-cont">
                    <div>
                        <div className="two-scroll-sect">
                            <div className="about-card">
                            </div>
                            <div className="about-card">
                            </div>
                        </div>
                        <div className="two-scroll-sect two-scroll-sect-bottom">
                            bottom
                        </div>
                    </div>
                </section><section className="second-scroll-cont">
                    <div>
                        <div className="two-scroll-sect">
                            <div className="about-card">
                            </div>
                            <div className="about-card">
                            </div>
                        </div>
                        <div className="two-scroll-sect two-scroll-sect-bottom">
                            bottom
                        </div>
                    </div>
                </section><section className="second-scroll-cont">
                    <div>
                        <div className="two-scroll-sect">
                            <div className="about-card">
                            </div>
                            <div className="about-card">
                            </div>
                        </div>
                        <div className="two-scroll-sect two-scroll-sect-bottom">
                            bottom
                        </div>
                    </div>
                </section>
            </ReactPageScroller>
        </>
    );
}

export default SecondPageScroll;

// import React from "react";
// import ReactPageScroller from 'react-page-scroller';
// import PageTwoOne from "../PageTwoOne";
// import PageTwoTwo from "../PageTwoTwo";


// export default class SecondPageScroll extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = { currentSecondPage: null };
//     // }

//     // handleSecondPageChange = number => {
//     //     console.log(number)
//     //     this.setState({ currentSecondPage: number });
//     // };

//     // handleSecondPageClick = (e) => {
//     //     e.persist();
//     //     let number;
//     //     number = e.target.value;
//     //     this.setState({ currentSecondPage: number });
//     // }

//     // // handleBeforeSecondPageChange = number => {
//     // //     console.log(number);
//     // // };

//     // getSecondPageNumbers = () => {
//     //     const secondPageNumbers = [];

//     //     for (let i = 8; i <= 3; i++) {
//     //         secondPageNumbers.push({
//     //             key: i,
//     //             eventkey: i - 1,
//     //         });
//     //     }

//     //     console.log([...secondPageNumbers]);
//     //     return [...secondPageNumbers]
//     // };

//     render() {
//         // const secondPagesNumbers = this.getSecondPageNumbers();

//         return (
//             <div className="page-contain">
//                 <ReactPageScroller
                    
//                     containerWidth={'80vw'}
//                     containerHeight={'80vh'}
//                     >
//                     <PageTwoOne />
//                     <section>middle</section>
//                     <section>middle</section>
//                     <PageTwoTwo />
//                 </ReactPageScroller>
//             </div>
//         );
//     }
// }
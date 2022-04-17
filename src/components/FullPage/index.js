import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReactPageScroller from 'react-page-scroller';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';


export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 };
    }

    handlePageChange = number => {
        console.log(number)
        this.setState({ currentPage: number });
    };

    handleClick = (e) => {
        e.persist();
        let number;
        number = e.target.value;
        this.handlePageChange(parseInt(number));
    }

    handleBeforePageChange = number => {
        console.log(number);
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 3; i++) {
            pageNumbers.push({
                key: i,
                eventkey: i - 1,
            });
        }

        console.log([...pageNumbers]);
        return [...pageNumbers]
    };

    render() {
        const pagesNumbers = this.getPagesNumbers();

        return (
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Sean Dillon
                            </Typography>
                            <Button value="0" onClick={this.handleClick}>Home</Button>
                            <Button value="1" onClick={this.handleClick}>About</Button>
                            <Button value="2" onClick={this.handleClick}>Work</Button>
                            <Button value="3" onClick={this.handleClick}>Contact</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <SectionOne />
                    <section id="third-section">Full-Page</section>
                    <SectionTwo />
                    <section id="fourth-section">Slideshow</section>
                </ReactPageScroller>
            </React.Fragment>
        );
    }
}
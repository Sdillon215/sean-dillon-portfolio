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
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    };

    handleClick = (e) => {
        e.persist();
        let number;
        number = e.target.value;
        this.setState({ currentPage: number });
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
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    onBeforePageScroll={this.handleBeforePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <SectionOne />
                    <SectionTwo />
                    <section id="third-section">Full-Page</section>
                    <section id="fourth-section">Slideshow</section>
                </ReactPageScroller>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Sean Dillon
                            </Typography>
                            <Button key="1" eventkey="0" value="0" onClick={this.handleClick}>About</Button>
                            <Button key="2" eventkey="1" value="1" onClick={this.handleClick}>About</Button>
                            <Button key="3" eventkey="2" value="2" onClick={this.handleClick}>About</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </React.Fragment>
        );
    }
}
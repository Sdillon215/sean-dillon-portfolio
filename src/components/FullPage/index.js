import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReactPageScroller from 'react-page-scroller';
import SectionOne from '../SectionOne';
import SectionTwo from '../SectionTwo';
import SectionThree from "../SectionThree";
import SectionFour from "../SectionFour";

export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 0 };
    }

    // recieves number from handleClick or page scroller built in funtion sets currentPage state
    handlePageChange = number => {
        console.log(number)
        this.setState({ currentPage: number });
    };
    
    // gets page number from nav btn click
    handleClick = (e) => {
        e.persist();
        let number;
        number = e.target.value;
        // call handlePageChange and parse int 
        this.handlePageChange(parseInt(number));
    }

    render() {
        return (
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                SD
                            </Typography>
                            <Button sx={{ boxShadow: 0 }} className="hvr-underline-from-left" value="0" onClick={this.handleClick}>Home</Button>
                            <Button className="hvr-underline-from-left" value="1" onClick={this.handleClick}>About</Button>
                            <Button className="hvr-underline-from-left" value="2" onClick={this.handleClick}>Work</Button>
                            <Button className="hvr-underline-from-left" value="3" onClick={this.handleClick}>Contact</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}>
                    <SectionOne />
                    <SectionTwo props={this.state.currentPage} />
                    <SectionThree />
                    <SectionFour />
                </ReactPageScroller>
            </React.Fragment>
        );
    }
}
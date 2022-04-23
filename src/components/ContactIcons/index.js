import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';

function ContactIcons() {
    return (
        <div className="cube-cont">
            <div className="cube">
                <div className="front">
                    <Link target="_blank" rel="noreferrer noopener" href='https://github.com/Sdillon215' color="inherit" underline="none">
                        <GitHubIcon className="hvr-float" sx={{ width: "100%", height: "100%" }} />
                    </Link>
                </div>
                <div className="back">
                    <Link target="_blank" rel="noreferrer noopener" href='mailto:sdillon215@gmail.com?subject=Hi%20Sean!' color="inherit" underline="none">
                        <EmailOutlinedIcon className="hvr-float" sx={{ width: "100%", height: "100%" }} />
                    </Link>
                </div>
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="left">
                    <Link target="_blank" rel="noreferrer noopener" href='https://www.linkedin.com/in/seandillon215/' color="inherit" underline="none">
                        <LinkedInIcon className="hvr-float" sx={{ width: "100%", height: "100%" }} />
                    </Link>
                </div>
                <div className="right">
                    <Link target="_blank" rel="noreferrer noopener" href='https://www.instagram.com/taco_sendz/' color="inherit" underline="none">
                        <InstagramIcon className="hvr-float" sx={{ width: "100%", height: "100%" }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactIcons;
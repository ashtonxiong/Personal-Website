import React from "react";
import "./styles.css";

import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import InfoPage from "../InfoPage"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Route, Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import AboutMe from "../../components/AboutMe"

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <InfoPage />,
        }
    }

    renderSideBar() {
        console.log("clicked menu");
    }

    onClick(event) {
        console.log(this.props.currentPage, "test props");
        this.props.changeCurrentPage(event);
        let render = null;
        if (event === "home") {
            render = <InfoPage />
        }
        if (event === "about me") {
            render = <AboutMe />
        }
        this.setState({ page: render });
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className="topbar-info'" position="absolute" style={{background: "#121212"}}>
                {/* <AppBar className="topbar-info" position="absolute" style={{ backgroundImage: 'linear-gradient(to right bottom, #c0414d, #d0795c, #dbaa7f, #e8d6b4, #fffff1)' }}> */}
                    <Toolbar>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                <IconButton variant="contained" {...bindTrigger(popupState)}>
                                    <MenuIcon className="menu-button"/>
                                </IconButton>
                                <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={() => this.onClick('home')}>Home</MenuItem>
                                <MenuItem onClick={() => this.onClick('experience/projects')}>Experience/Projects</MenuItem>
                                <MenuItem onClick={() => this.onClick('about me')}>About Me</MenuItem>
                                </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Ashton Xiong
                        </Typography>
                        <div className="social-container">
                            <a href="https://www.linkedin.com/in/ashton-xiong/">
                                <LinkedInIcon className="icon" fontSize="large"/>
                            </a>
                            <a href="https://github.com/ashtonxiong">
                                <GitHubIcon className="icon" fontSize="large"/>
                            </a>
                            <a href="https://www.instagram.com/ashton_xiong/">
                                <InstagramIcon className="icon" fontSize="large"/>
                            </a>
                        </div>
                        <br />
                    </Toolbar>
            </AppBar>
            {/* {this.state.page} */}
          </Box>
        )
    }
}

export default TopBar;
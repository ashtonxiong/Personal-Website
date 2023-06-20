import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./styles.css";
import { Typography, Paper } from "@mui/material";
import ReactPlayer from 'react-player'


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }   


    render() {
        return(
            <Paper className="container">
                <Typography>
                    test
                </Typography>
            </Paper>
        )
    }

}

export default SideBar;
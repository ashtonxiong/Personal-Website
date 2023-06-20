import React from "react";
import "./styles.css";

import { Typography, Paper } from "@mui/material";


class ProjectPage extends React.Component {
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

export default ProjectPage;
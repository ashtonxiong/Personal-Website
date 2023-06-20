import React from "react";
import "./styles.css";
import { Typography, Paper } from "@mui/material";


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }   


    render() {
        return(
        <div className="footer-container">
            <Paper className="footer">
              <Typography variant="body1">
                Test
                {/* Footer content */}
              </Typography>
            </Paper>
          </div>
        )
    }

}

export default Footer;
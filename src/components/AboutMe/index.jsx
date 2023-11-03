import React from "react";
// import "./styles.css";
import { Typography, Paper } from "@mui/material";
import ReactPlayer from "react-player";
import InfoPage from "../InfoPage";

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }   


    render() {
        return(
            <section className="aboutme-container">
                <div className="aboutme-header-container">
                    <ReactPlayer
                    url={require("../../videos/backgroundComputer.mp4")}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="50%"
                    height="50%"
                    // playsinline={true}
                    className="aboutme-background-video"
                />
                    <div className="aboutme-centered-content">
                        <Typography variant="h1" className="header-title" fontFamily="Impact">
                        About Me
                        </Typography>
                    </div>                
                    </div>
                    <Typography>
                        hi
                    </Typography>
            </section>

        )
    }

}

export default AboutMe;

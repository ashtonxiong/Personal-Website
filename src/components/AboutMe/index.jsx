import React from "react";
import "./styles.css";
import { Typography, Paper } from "@mui/material";
import ReactPlayer from "react-player";


class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }   


    render() {
        return(
            <section className="container">
                <div className="header-container">
                    <ReactPlayer
                    url={require("../../videos/backgroundComputer.mp4")}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    playsinline={true}
                    className="background-video"
                    />
                    <div className="centered-content">
                        <Typography variant="h1" className="header-title" fontFamily="Impact">
                        About Me
                        </Typography>
                    </div>                
                </div>
            </section>

        )
    }

}

export default AboutMe;

// import React from "react";
// import "./styles.css";
// import { Typography, Paper } from "@mui/material";
// import { Parallax } from "react-parallax";
// import ReactPlayer from "react-player";

// class AboutMe extends React.Component {
//   render() {
//     return (
//       <section className="container">
//         <div className="header-container">
//           <Parallax bgVideo={require("../../videos/backgroundComputer.mp4")} strength={500}>
//             <div className="parallax-video" />
//           </Parallax>
//           <div className="centered-content">
//             <Typography variant="h1" className="header-title" fontFamily="Impact">
//               About Me
//             </Typography>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default AboutMe;

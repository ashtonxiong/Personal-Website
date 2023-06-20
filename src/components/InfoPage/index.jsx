import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./styles.css";
import { Typography } from "@mui/material";
import ReactPlayer from 'react-player'
import SideBar from "../SideBar";

// import App from '../../A'

class InfoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            rotate: ["Computer Science @ Stanford", "Aspiring Full-Stack Developer", "Aspiring Software-Engineer"],
            currentRotateIndex: 0, // chooses word of rotation
            currentWordIndex: 0, // letter of rotate word
            currentWord: " ",
        }
    }    

    // reverse() {
    //     let word = this.state.currentWord;
    //     while (word !== "") {
    //         let size = word.length;
    //         word.substring(0, size);
    //         this.setState({ currentWord: word });
    //         word = this.state.currentWord;
    //     }
    // }


    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.currentRotateIndex === 3) {
                this.setState({ currentRotateIndex: 0 });
                return;
            }
            let rotateWord = (this.state.rotate)[this.state.currentRotateIndex];
            let size = rotateWord.length;
            if (this.state.currentWordIndex === size) {
                this.setState({currentWord: " " })
                this.setState({ currentRotateIndex: this.state.currentRotateIndex + 1});
                this.setState({ currentWordIndex: 0});
                return;
            }
            let word = this.state.currentWord;
            let letter = rotateWord[this.state.currentWordIndex];
            word += letter;
            this.setState({currentWord: word});
            this.setState({ currentWordIndex: this.state.currentWordIndex + 1})
        }, 400);
      }




    render() {
        return (
            <section className="container"> 
            {/* <SideBar /> */}
            <ReactPlayer
                url={require("../../videos/background1.mp4")}
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                playsinline={true}
                className="background-video"
                />
            <section className="banner"> 
            <Container className="container">
                <Row className="align-items-center">
                    <Col cs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to My Personal Website </span>
                        <div className="text-container">
                            <Typography variant="h3"> {`Hello! I'm Ashton Xiong`} <br />
                            <span className="wrapper ">{this.state.currentWord}</span>|</Typography>
                            <br />
                            <p className="description"> I am a third-year Stanford Computer Science undergraduate on the Human Computer Interaction track, 
                                with a passion for exploring the intersection of technology in different industries. 
                                I recently Implemented this website and is still currently a work in progress. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
            </section>
        )
    }
}

export default InfoPage;
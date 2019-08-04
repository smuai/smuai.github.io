import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { makeStyles } from '@material-ui/core/styles';
import background from "../../../Images/landing.jpg"
import './styles.css'

const useStyles = makeStyles({
    root: {
        fontFamily: "Montserrat",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "white",
        height: "100vh",
    },
    hr: {
        // width: "1000px",
        height: "3px",
        backgroundColor: "white"
    },
    brainstorm: {
        paddingTop: "50px", 
        fontSize: "40px",
    }
})

export default function Landing() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <div className="hero-body">
                <div style={{
                        textAlign: "center", 
                        position: "absolute", 
                        left: "50%", 
                        top: "53%", 
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    <Slide bottom>
                        <p className="subtitle"><strong>SMU ARTIFICIAL INTELLIGENCE CLUB</strong></p>
                    </Slide>
                    <br />
                    <Fade>
                        <hr className={classes.hr} width="1000px"/>
                        <Slide top>
                            <h2 className={classes.brainstorm}>Join the br<div style={{display: "inline", color: "aqua"}}>AI</div>nstorm</h2>
                        </Slide>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

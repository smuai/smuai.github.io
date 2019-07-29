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
        height: "92vh",
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
                <div className="container is-fluid" 
                    style={{
                        textAlign: "center", 
                        position: "absolute", 
                        left: "50%", 
                        top: "53%", 
                        transform: "translate(-50%, -50%)"
                    }}
                >
                    <Slide bottom>
                        <p className="subtitle"><strong>SMU ARTIFICAL INTELLIGENCE CLUB</strong></p>
                    </Slide>
                    <br />
                    <Fade>
                        <hr className={classes.hr} width="1000px"/>
                        <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,700" rel="stylesheet"/>
                        <Slide top>
                            <h2 className={classes.brainstorm}>Join the brainstorm</h2>
                        </Slide>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

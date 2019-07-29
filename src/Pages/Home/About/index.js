import React from "react"
import Container from '@material-ui/core/Container';
import photoshoot from '../../../Images/exco.jpg'
import photoshoot2 from '../../../Images/exco2.jpg'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles({
    root: {
        color: "#1b2a52",
        fontFamily: "Montserrat",
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: "50px",
        paddingTop: '50px',
    },
    subtitle: {
        fontSize: "35px",
        paddingTop: "60px",
        paddingLeft: "80px",
        marginBottom: "10px",
    },
    about: {
        fontSize: "25px",
        marginLeft: "108px",
        marginRight: "108px",
        overflow: "hidden",
    },
    mission: {
        fontSize: "25px",
        marginLeft: "80px",
        paddingLeft: "20px",
        paddingRight: "25px",
        borderLeft: "1px solid #1b2a52",
    },
    ourMission: {
        overflow: "hidden",
    }
})

export default function About() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Slide top>
                <h1 className={classes.title}>ABOUT US</h1>
            </Slide>
            <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet"/>
            <img className="photoshoot" src={photoshoot} width="1000px" style={{display: "block", margin: "auto", marginTop: "50px", marginBottom: "50px"}} alt="SmuAI team 1" />
            <Container>
                <link href="https://fonts.googleapis.com/css?family=Lato:300,700|Prata" rel="stylesheet"/>
                <div className={classes.about}>
                    <Fade bottom>
                        <p><strong>SmuAI</strong> is a student-led ThinkTank that facilitates the sharing of ideas in the field of Artificial Intelligence.​</p>
                        <p>This student club is supported by the Singapore Management University's Institute of Innovation and Entrepreneurship (SMU IIE).</p>
                    </Fade>
                </div>
                <Slide left>
                    <h3 className={classes.subtitle}>OUR MISSION</h3>
                </Slide>
                <div className={classes.ourMission}>
                    <Fade bottom>
                        <p className={classes.mission}>To cultivate and spread ideas about Artificial Intelligence.</p>
                        <img className="photoshoot" src={photoshoot2} width="1000px" style={{display: "block", margin: "auto", marginTop: "50px", marginBottom: "100px"}} alt="SmuAI team 2" />
                    </Fade>
                </div>
            </Container>
        </Container>
    )
}
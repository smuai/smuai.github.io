import React from "react"
import Container from '@material-ui/core/Container';
// import photoshoot from '../../../Images/exco.jpg'
// import photoshoot2 from '../../../Images/exco2.jpg'
import photoshoot from '../../../Images/group1.jpg'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';
import './styles.css'
import iie from '../../../Images/iie.png'

export default function About() {
    return (
        <Container id="about-section">
            <Slide top>
                <h1 className="who-we-are">WHO WE ARE</h1>
            </Slide>
            <img className="photoshoot1" src={photoshoot} alt="SmuAI Photoshoot"/>
            <Container>
                <div className="about">
                    <Fade bottom>
                        <p><strong>SmuAI</strong> is a student-led ThinkTank that facilitates the sharing of ideas in the field of Artificial Intelligence.​</p>
                        <p>We are proudly supported by the Singapore Management University's Institute of Innovation and Entrepreneurship (SMU IIE).</p>
                        <a href="https://iie.smu.edu.sg/">
                            <img className="iie-image" src={iie} alt="SMU IIE"/>
                        </a>
                    </Fade>
                </div>
                <Slide left>
                    <h3 className="our-mission">OUR MISSION</h3>
                </Slide>
                <div className="ourmission">
                    <Fade bottom>
                        <p className="mission">To cultivate and spread ideas about Artificial Intelligence.</p>
                        {/* <img className="photoshoot2" src={photoshoot} alt="SmuAI team 2" /> */}
                        <br/>
                    </Fade>
                </div>
            </Container>
        </Container>
    )
}
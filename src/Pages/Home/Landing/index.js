import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import './styles.css'

function Landing(props) {

    return (
        <div id="landing">
            <div style={{
                    textAlign: "center", 
                    position: "absolute", 
                    left: "50%", 
                    top: "55%", 
                    transform: "translate(-50%, -50%)"
                }}
            >
                <Slide bottom>
                    <p className="smuai"><strong>SMU ARTIFICIAL INTELLIGENCE CLUB</strong></p>
                </Slide>
                <br />

                <Fade>
                    <hr className="" width="1000px"/>
                    <Slide top>
                        <p className="brainstorm">Join the br<div style={{display: "inline", color: "aqua"}}>AI</div>nstorm</p>
                    </Slide>
                </Fade>
            </div>
        </div>
    )
}

export default Landing
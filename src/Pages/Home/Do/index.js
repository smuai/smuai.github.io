import React from "react"
import Vivus from "vivus";
import dialog from '../../../Images/dialog.svg'
import research from '../../../Images/research.svg'
import incubate from '../../../Images/incubate.svg'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';
import './styles.css'

class Do extends React.Component {
    componentDidMount() {
        new Vivus("dialog-icon", {
          duration: 250,
          file: dialog,
          type: "sync",
          start: "inViewport"
        });
        new Vivus("research-icon", {
          duration: 250,
          file: research,
          type: "sync",
          start: "inViewport"
        });
        new Vivus("incubate-icon", {
          duration: 250,
          file: incubate,
          type: "sync",
          start: "inViewport"
        });
    }

    render() {
        return (
            <section id="do">
                <Slide top>
                    <h1 className="what-we-do">WHAT WE DO</h1>
                </Slide>
                {/* <Fade bottom> */}
                    <div style={{justifyContent: "center", textAlign: "center"}}>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-sm">
                                    <Fade bottom>
                                        <h2 className="subtitle">DIALOGUE</h2>
                                    </Fade>
                                    <div class="justify-content-center" id="dialog-icon"/>
                                    <Slide bottom>
                                        <p className="description">We facilitate discussions with industry leaders and academics working with AI.</p>
                                    </Slide>
                                </div>
                                <div class="col-sm">
                                    <Fade bottom>
                                        <h2 className="subtitle">INSIGHTS</h2>
                                    </Fade>
                                    <div id="research-icon"/>
                                    <Slide bottom>
                                        <p className="description">We publish newsletters on trends and insights from our dialog sessions between industry leaders.</p>
                                    </Slide>
                                </div>
                                <div class="col-sm">
                                    <Fade bottom>
                                        <h2 className="subtitle">INCUBATE</h2>
                                    </Fade>
                                    <div id="incubate-icon"/>
                                    <Slide bottom>
                                        <p className="description">We work closely with SMU IIE to support entrepreneurs with Artificial Intelligence-related projects.</p>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                        <Slide left>
                            <h3 className="where-we-are-going">WHERE WE ARE GOING</h3>
                        </Slide>
                        <Fade bottom>
                            <p className="future">We seek to build Thought Leadership within the AI community in Singapore and beyond.</p>
                        </Fade>
                    </div>
            </section>
        )
    }
}

export default Do
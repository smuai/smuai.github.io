import React from "react"
import background from '../../../Images/landing.jpg'
import queekBoon from '../../../Images/quek_boon_kiat.jpg'
import fooChuan from '../../../Images/foo_chuan_sheng.jpg'
import kennethKwok from '../../../Images/kenneth_kwok.JPG'

export default function a_star() {
    return (
        <div id="a-star">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>September</h3>
                            <h1 style={{color: "gold"}}>9</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2020</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <p className="event-venue-2" style={{color: "white"}}><a href='http://tinyurl.com/smuaiastar'>Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">AI in R&D: Understanding Humans from an AI Perspective</h1>
                        <br/>
                        <p><strong>SMUAI is proud to bring you our second Online Panel Talk for the semester, featuring one of Singapore’s top Research Institutes: A*STAR!</strong></p>
                        <p>Interested to know how we can give Artificial Intelligence and robots a touch of humanity? Join us to find out how these new AI solutions can impact us in our daily lives!</p>
                        <p>Don’t miss your chance to discover key insights by distinguished A*STAR Research Scientists who will be sharing more about <strong>Human-centric</strong> AI as well as their research on advanced <strong>Deep Learning algorithms</strong> that will be promising to the future of AI efficiency! We will also have a Q&A session where you can find out more about what it is like working in A*STAR!</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="speaker" src={kennethKwok} alt="KENNETH KWOK" />
                                <h6><strong>KENNETH KWOK</strong></h6>
                                <p>Principal Research Scientist, Institute of High Performance Computing (IHPC), A*STAR</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={queekBoon} alt="QUEK BOON KIAT" />
                                <h6><strong>QUEK BOON KIAT</strong></h6>
                                <p>Director, Department of Social & Cognitive Computing, Institute of High Performance Computing (IHPC), A*STAR</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={fooChuan} alt="FOO CHUAN SHENG" />
                                <h6><strong>FOO CHUAN SHENG</strong></h6>
                                <p>Assistant Head of Department (Research), Machine Intellection Department, Institute of Infocomm Research (I<sup>2</sup>R), A*STAR</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 9 September 2020, Wednesday<br/><strong>Time:</strong> 7:00 P.M. – 8:30 P.M.<br/><strong>Venue:</strong> Online via Zoom</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
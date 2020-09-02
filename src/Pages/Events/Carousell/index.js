import React from "react"
import background from '../../../Images/landing.jpg'
import sidd from '../../../Images/sidd.jpg'
// import aparna from '../../../Images/aparna.png'
// import coffrant from '../../../Images/coffrant.jpeg'

export default function Carousell() {
    return (
        <div id="carousell">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>August</h3>
                            <h1 style={{color: "gold"}}>26</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2020</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">AI in E-commerce: Carousell's Strategy for Transforming Customer Experience</h1>
                        <br/>
                        <p><strong>SMUAI is proud to bring you our first Online Panel Talk for the semester, featuring one of Singapore’s top E-commerce: Carousell</strong></p>
                        <p>Did you know that Carousell is moving into AI-first to create new experiences for users? With AI, it can take us as fast as only 3 seconds to buy and sell via Carousell!</p>
                        <p>Don’t miss your chance to discover key insights from Panel Speaker Siddhartha Banerjee, a Senior Data Scientist in Carousell, who will be sharing more on how AI is transforming the digital marketplace, including Carousell itself!</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <img className="speaker" src={sidd} alt="YONG KAI YI" />
                        <h6><strong>SIDDHARTA BANERJEE</strong></h6>
                        <p>Senior Data Scientist, Carousell</p>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 26 August 2020, Wednesday<br/><strong>Time:</strong> 7:00 P.M. – 8:30 P.M.<br/><strong>Venue:</strong> Zoom Meeting</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
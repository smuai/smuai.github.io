import React from "react"
import background from '../../../Images/landing.jpg'
import crouspeyre from '../../../Images/crouspeyre.jpeg'
import manders from '../../../Images/manders.jpg'
import miller from '../../../Images/stevenmiller.jpg'

export default function Panel1() {
    return (
        <div id="panel1">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>August</h3>
                            <h1 style={{color: "gold"}}>28</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2019</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU SCHOOL OF LAW, SEMINAR ROOM 3-10</h5>
                            <p className="event-venue-2" style={{color: "white"}}>55 Armenian Street<br/>Singapore 179943</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">Artificial Intelligence In Business: Unlocking Value from AI in Organizations</h1>
                        <br/>
                        <p>According to Accenture research, AI could create up to US$215 billion in Gross Value Added across 11 industries in Singapore by 2035. As AI seeks to augment every sector of the economy, more businesses are waking up to its massive potential.</p>
                        <p>Find out how these leading providers of AI solutions are deploying business solutions in client settings, and how it is delivering real business value.</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="speaker" src={crouspeyre} alt="CHARLES CROUSPEYRE" />
                                <h6><strong>CHARLES CROUSPEYRE</strong></h6>
                                <p>Director, Accenture Applied Intelligence (ASEAN Lead)</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={manders} alt="COREY MANDERS" />
                                <h6><strong>COREY MANDERS</strong></h6>
                                <p>Head of R&D,OneConnect Financial Technology</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={miller} alt="STEVEN MILLER" />
                                <h6><strong>STEVEN MILLER</strong></h6>
                                <p>Vice Provost (Research), Professor of Information Systems (Practice),<br/>SMU</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 28 August 2019, Wednesday<br/><strong>Time:</strong> 7:00 P.M. – 9:30 P.M.<br/><strong>Venue:</strong> SOL Seminar Room 3-10</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
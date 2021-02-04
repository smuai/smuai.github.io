import React from "react"
import background from '../../../Images/landing.jpg'
import tern from '../../../Images/tern.jpg'
import sydney from '../../../Images/sidney.jpg'
import desiree from '../../../Images/desiree.jpg'

export default function fireChat() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>February</h3>
                            <h1 style={{color: "gold"}}>10</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2021</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU ADMINISTRATION BUILDING, UNIVERSITY LOUNGE, LEVEL 6</h5>
                            <p className="event-venue-2" style={{color: "white"}}>81 Victoria Street<br/>Singapore 188065</p>
                            <p className="event-venue-2" style={{color: "white"}}><a href="http://tinyurl.com/smuaiFiresideChat">Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">SMUAI Fireside Chat</h1>
                        <br/>
                        <p>Now an AI Singapore Student Chapter, SMUAI is proud to bring you our first physical AI Fireside Chat for the semester!</p>
                        <p><strong>Don’t miss your chance to discover key insights from who will be sharing about their journey to the AI industry, reasons behind their mid-career switch and their day-to-day inner workings!</strong></p>
                        <p>There will also be a Q&A and Networking Session at the end of the talk!</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="speaker" src={tern} alt="TERN POH LIN" />
                                <h6><strong>TERN POH LIN</strong></h6>
                                <p>Assistant Head, AI Singapore</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={sydney} alt="SYDNEY TIO" />
                                <h6><strong>SYDNEY TIO</strong></h6>
                                <p>AI Engineer, AI Singapore</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={desiree} alt="DESIREE CHEN" />
                                <h6><strong>DESIREE CHEN</strong></h6>
                                <p>AI Engineer Apprentice, AI Singapore</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 10 February 2021, Wednesday<br/><strong>Time:</strong> 5:00 P.M. – 6:00 P.M.<br/><strong>Venue:</strong> SMU Administation Building, University Lounge, Level 6</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
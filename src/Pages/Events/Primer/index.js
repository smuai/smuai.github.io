import React from "react"
import background from '../../../Images/landing.jpg'

export default function Primer() {
    return (
        <div id="primer">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>August</h3>
                            <h1 style={{color: "gold"}}>21</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2019</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU SCHOOL OF BUSINESS, SEMINAR ROOM 1-1</h5>
                            <p className="event-venue-2" style={{color: "white"}}>50 Stamford Road<br/>Singapore 178899</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">SmuAI Primer Session</h1>
                        <br/>
                        <p>SMU Artificial Intelligence introduces our very first Primer Session!</p>
                        <br/>
                        <p>If you are curious about Artificial Intelligence and how it is going to power the next industrial revolution, concerned about how Artificial Intelligence is relevant to your field of studies and even your future career, or simply curious to know what SmuAI is about, come on down to understand what the AI hype is about, how it will affect you, and what SmuAI does to add value to your AI knowledge!</p>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 21 August 2019, Wednesday<br/><strong>Time:</strong> 7:00 P.M. – 8:00 P.M.<br/><strong>Venue:</strong> LKCSB Seminar Room 1-1</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
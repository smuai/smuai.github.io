import React from "react"
import background from '../../../Images/landing.jpg'

export default function Vivace19() {
    return (
        <div id="vivace19">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/>
                            <h3 style={{color: "white"}}>August</h3>
                            <h1 style={{color: "gold"}}>16</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2019</h3>
                            <br/><br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SINGAPORE MANAGEMENT UNIVERSITY</h5>
                            <p className="event-venue-2" style={{color: "white"}}>81 Victoria St<br/>Singapore 188065</p>
                            <br/><br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">VIVACE 2019</h1>
                        <br/>
                        <p style={{fontWeight:"bold"}}>What is AI really?<br/>Why should you care about AI even if you do not have a technical background?</p>
                        <p>At SmuAI, we seek to offer you cutting edge perspectives about industry trends and the latest topics through our organised dialogues with leading thinkers and influencers from academia and the private sector. Join us to discuss about these issues that you should care about.</p>
                        <p>Come on down to our booth near <strong>SIS basement</strong> to find out more at VIVACE on 16th August 2019!</p>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 16 August 2019, Friday<br/><strong>Time:</strong> 12:00 P.M. – 6:00 P.M.<br/><strong>Venue:</strong> Singapore Management University</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
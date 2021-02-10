import React from "react"
import background from '../../../Images/landing.jpg'
import mark from '../../../Images/mark.jpg'
import jacquelyn from '../../../Images/jacquelyn.jpg'
import ashley from '../../../Images/ashley.png'

export default function aiHR() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>February</h3>
                            <h1 style={{color: "gold"}}>17</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2021</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <p className="event-venue-2" style={{color: "white"}}><a href="http://tinyurl.com/smuaiHR">Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">AI in HR</h1>
                        <br/>
                        <p>Interested in learning how recruiters scan through your documents when you apply for a job? </p>
                        <p>Want to know how this software is created?</p>
                        <p><strong>Applications for jobs and even internships all involve cognitive and personality testing.</strong></p>
                        <p><strong>How will AI continue to impact and change traditional recruitment processes? </strong></p>
                        <p>Join our panel of industry leaders in the growing field of HR automation as they discuss the 
                        challenges and the role AI and technology has in recruitment and people management and 
                        provide insights into recruitment in the 21st century.
                        </p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="speaker" src={ashley} alt="ASHLEY KHOR" />
                                <h6><strong>ASHLEY KHOR</strong></h6>
                                <p>Applied Intelligence Lead, Health and Public Service</p>
                                <p><strong>Accenture Singapore</strong></p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={mark} alt="MARK FINDLAY" />
                                <h6><strong>MARK FINDLAY</strong></h6>
                                <p>Director, Centre for AI and Data Governance</p>
                                <p><strong>Professional Research Fellow</strong></p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={jacquelyn} alt="JACQUELYN SOH" />
                                <h6><strong>JACQUELYN SOH</strong></h6>
                                <p>Marketing Director Manager, APAC</p>
                                <p><strong>Pymetrics</strong></p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 17 February 2021, Wednesday<br/><strong>Time:</strong> 6:00 P.M. – 7:30 P.M.<br/><strong>Venue:</strong> Online via Zoom</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
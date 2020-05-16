import React from "react"
import background from '../../../Images/landing.jpg'
import kaiyi from '../../../Images/kaiyi.jpg'
import aparna from '../../../Images/aparna.png'
import coffrant from '../../../Images/coffrant.jpeg'

export default function GrabPanel() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>January</h3>
                            <h1 style={{color: "gold"}}>29</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2020</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU ADMINISTRATION BUILDING, UNIVERSITY LOUNGE, LEVEL 6</h5>
                            <p className="event-venue-2" style={{color: "white"}}>81 Victoria Street<br/>Singapore 188065</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">Understanding Grab's Data Science & AI Case Studies</h1>
                        <br/>
                        <p>Interested to find out how Grab is leveraging Data Science and AI to streamline its SEA business operations? Want to learn more about their exciting internship and career opportunities?</p>
                        <p><strong>SMU Artificial Intelligence presents Grab x SmuAI, an evening of insightful conversations and great opportunities!</strong></p>
                        <p>Do not miss the chance to find out how Grab utilizes AI to improve the livelihood of Southeast Asians and how YOU can acquire your next internship offer or even a full-time career with the largest decacorn in SEA (now worth over $10 billion)!</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="speaker" src={kaiyi} alt="YONG KAI YI" />
                                <h6><strong>YONG KAI YI</strong></h6>
                                <p>Data Scientist (Machine Learning), Grab</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={aparna} alt="APARNA RAMESH" />
                                <h6><strong>APARNA RAMESH</strong></h6>
                                <p>Lead Product Manager (Marketplace), Grab</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={coffrant} alt="CHRISTIAN COFFRANT" />
                                <h6><strong>CHRISTIAN COFFRANT</strong></h6>
                                <p>Data Scientist (Analytics), Grab</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 29 January 2020, Wednesday<br/><strong>Time:</strong> 6:30 P.M. – 9:30 P.M.<br/><strong>Venue:</strong> SMU Administation Building, University Lounge, Level 6</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
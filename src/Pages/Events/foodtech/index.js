import React from "react"
import background from '../../../Images/landing.jpg'
import sandhya from '../../../Images/sandhya.jpg'
import kelvin from '../../../Images/kelvinng.jpg'
import william from '../../../Images/williamchen.jpg'
import benjamin from '../../../Images/benjaminsmith.jpg'

export default function foodTech() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>February</h3>
                            <h1 style={{color: "gold"}}>3</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2021</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <p className="event-venue-2" style={{color: "white"}}><a href="https://bit.ly/3sWrdGq">Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">Alternative Proteins: Balancing Quality and Quantity</h1>
                        <br/>
                        <p>With an insatiable global demand for protein, food supply chains have become more complex than ever before, further complicating the global food landscape.</p>
                        <p>Interested to learn more about the role of Artificial Intelligence in food production? SMUAI is proud to bring you our next online panel talk for the semester, </p>
                        <p><strong>Alternative Proteins: Balancing Food Quality and Quantity</strong></p>
                        <p>Do not miss your chance to discover key insights regarding the challenges and the role AI and technology has, and how the rise of alternative proteins could alleviate issues with regards to our food resources.</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-3">
                                <img className="speaker" src={sandhya} alt="SANDHYA SRIRAM" />
                                <h6><strong>Dr SANDHYA SRIRAM</strong></h6>
                                <p>CEO & Co-Founder, Shiok Meats Pte. Ltd.</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={kelvin} alt="KELVIN NG" />
                                <h6><strong>KELVIN NG</strong></h6>
                                <p>Business Development Director (ASEAN), Green Monday</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={william} alt="WILLIAM CHEN" />
                                <h6><strong>Prof WILLIAM CHEN</strong></h6>
                                <p>Michael Fam Chair Professor in Food Science & Technology, Nanyang Technological University</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={benjamin} alt="BENJAMIN SMITH" />
                                <h6><strong>BENJAMIN SMITH</strong></h6>
                                <p>Director, Singapore Future Ready Food Safety Hub & A*STAR Innovations in Food & Chemical Safety Programme</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 3 February 2021, Wednesday<br/><strong>Time:</strong> 5:00 P.M. – 6:00 P.M.<br/><strong>Venue:</strong> Online via Zoom</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
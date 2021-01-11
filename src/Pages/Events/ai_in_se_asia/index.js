import React from "react"
import background from '../../../Images/landing.jpg'
import chuaSoonGhee from '../../../Images/chuasoonghee.jpg'
import laurenceLiew from '../../../Images/laurienceliew.jpg'
import stevenMiller from '../../../Images/stevenmiller_new.jpg'

export default function GrabPanel() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>January</h3>
                            <h1 style={{color: "gold"}}>20</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2021</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <p className="event-venue-2" style={{color: "white"}}><a href="https://forms.gle/jksRM5u2sTwDa923A">Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">AI Adoption Trends across Southeast Asia</h1>
                        <br/>
                        <p>
                            Interested to learn more about the impact of Artificial Intelligence in Southeast Asia 
                            and its impact on future employability in the various fields?  
                         </p>
                        <p>
                            SMUAI is proud to bring you our first online panel talk for the semester,  
                            <strong>AI Adoption Trends across Southeast Asia</strong>
                        </p>
                        <p>
                            Moderated by Professor Emeritus Steven Miller, don’t miss your chance to discover 
                            key insights from Panellists Laurence Liew and Chua Soon Ghee, 
                            who will be sharing about AI's position in Southeast Asia today and its significance in the future, 
                            the barriers to AI adoption and the role AI play in different industries!  
                        </p>
                        <br/>
                        <div className="row">
                            <div className="col-sm-9">
                                <h3>Panel Speaker(s)</h3>
                            </div>
                            <div className="col-sm-3">
                                <h3>Moderator</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <img className="speaker" src={laurenceLiew} alt="Laurence Liew" />
                                <h6><strong>Laurence Liew</strong></h6>
                                <p>Director of AI Industry Innovation, AI Singapore</p>
                            </div>
                            <div className="col-sm-4">
                                <img className="speaker" src={chuaSoonGhee} alt="Chua Soon Ghee" />
                                <h6><strong>Chua Soon Ghee</strong></h6>
                                <p>Senior Partner, Kearney</p>
                            </div>
                            <div className="col-sm">
                                <img className="speaker" src={stevenMiller} alt="Steven Miller" />
                                <h6><strong>Steven Miller</strong></h6>
                                <p>Professor Emeritus, School of Information Systems, Singapore Management University</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 20 January 2021, Wednesday<br/><strong>Time:</strong> 6:30 P.M. – 7:30 P.M.<br/><strong>Venue:</strong> Online via Zoom</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import background from '../../../Images/landing.jpg'
import wanDingYao from '../../../Images/wan-ding-yao.jpg'
import changZiQuan from '../../../Images/Chang-Zi-Qian.png'
import justinChan from '../../../Images/Justin-Chan.jpg'
import sohJerrold from '../../../Images/Soh_Jerrold.jpg'

export default function GrabPanel() {
    return (
        <div id="grab-panel">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>September</h3>
                            <h1 style={{color: "gold"}}>16</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2020</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>Online via Zoom</h5>
                            <p className="event-venue-2" style={{color: "white"}}><a href="http://bit.ly/smulitsmuai">Registration Link</a></p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">AI in Law: Disruptive or Constructive?</h1>
                        <br/>
                        <p>Interested to learn more about the impact of legal technology on future employability? </p>
                        <p>Join us to find out how Artificial Intelligence can possibly transform the legal landscape! </p>
                        <p>In collaboration with SMU LIT, SMUAI is proud to bring you our third online panel talk for the semester, 
                            <strong>AI in Law: Disruptive or Constructive?</strong></p>
                        <p>Don’t miss your chance to discover key insights, observe a live demonstration of legal technology, 
                            and have your questions answered by distinguished panellists in the legal field  <strong> -Jerrold Soh, Chang Zi Qian, and Justin Chan </strong>, 
                            who will be sharing more about their perspectives and experiences on how AI has impacted the legal industry! </p>
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
                            <div className="col-sm-3">
                                <img className="speaker" src={sohJerrold} alt="YONG KAI YI" />
                                <h6><strong>JERROLD SOH</strong></h6>
                                <p>Assistant Professor of Law</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={changZiQuan} alt="APARNA RAMESH" />
                                <h6><strong>CHANG ZI QIAN</strong></h6>
                                <p>CEO of Intellex</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={justinChan} alt="CHRISTIAN COFFRANT" />
                                <h6><strong>JUSTIN CHAN</strong></h6>
                                <p>Of Counsel, LVM Law Chambers</p>
                            </div>
                            <div className="col-sm-3">
                                <img className="speaker" src={wanDingYao} alt="CHRISTIAN COFFRANT" />
                                <h6><strong>WAN DING YAO</strong></h6>
                                <p>4th Year LLB Student</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 16 September 2020, Wednesday<br/><strong>Time:</strong> 7:00 P.M. – 8:30 P.M.<br/><strong>Venue:</strong> Online via Zoom</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
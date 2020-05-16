import React from "react"
import background from '../../../Images/landing.jpg'
import jason from '../../../Images/jason.jpeg'
import warren from '../../../Images/warren.jpg'
import malavika from '../../../Images/malavika.jpg'
import miller from '../../../Images/stevenmiller.jpg'

export default function Panel2() {
    return (
        <div id="panel2">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>September</h3>
                            <h1 style={{color: "gold"}}>18</h1>
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
                        <h1 className="event-title">Artificial Intelligence In Business: Building Trust in AI through Transparency & Governance</h1>
                        <br/>
                        <p>In partnership with the SMU Institute of Innovation & Entrepreneurship, SMU Artificial Intelligence is proud to present our second discussion panel featuring an exciting lineup of distinguished speakers from <strong>SMU</strong> and <strong>Merck Sharpe & Dohme Corp (MSD)</strong>.</p>
                        <p>The ubiquity of AI in our lives sparks introspective conversations on the way  ethics is changing our everyday technology and its role in propelling AI forward. Join us to discuss with prominent industry leaders and understand how transparency and governance is shaping this nascent technology.</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-lg-3">
                                <img className="speaker" src={jason} alt="JASON TAMARA WIDJAJA" />
                                <h6><strong>JASON TAMARA WIDJAJA</strong></h6>
                                <p>Associate Director of Data Science (AI),<br/>Merck Sharpe & Dohme Corp (MSD)</p>
                            </div>
                            <div className="col-lg-3">
                                <img className="speaker" src={warren} alt="WARREN B. CHIK" />
                                <h6><strong>WARREN B. CHIK</strong></h6>
                                <p>Associate Professor of Law,<br/>Singapore Management University</p>
                            </div>
                            <div className="col-lg-3">
                                <img className="speaker" src={malavika} alt="MALAVIKA JAYARAM" />
                                <h6><strong>MALAVIKA JAYARAM</strong></h6>
                                <p>Associate Professor of Law (Practice),<br/>Singapore Management University</p>
                            </div>
                            <div className="col-lg-3">
                                <img className="speaker" src={miller} alt="STEVEN MILLER" />
                                <h6><strong>STEVEN MILLER</strong></h6>
                                <p>Vice Provost (Research), Professor of Information Systems (Practice),<br/>SMU</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 18 September 2019, Wednesday<br/><strong>Time:</strong> 6:30 P.M. – 9:30 P.M.<br/><strong>Venue:</strong> SOL Seminar Room 3-10</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
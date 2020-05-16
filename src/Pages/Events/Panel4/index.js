import React from "react"
import background from '../../../Images/landing.jpg'
import miller from '../../../Images/stevenmiller.jpg'
import juejing from '../../../Images/juejing.jpg'

export default function Panel4() {
    return (
        <div id="panel4">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>January</h3>
                            <h1 style={{color: "gold"}}>15</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2020</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU ADMINISTRATION BUILDING, MOCHTAR RIADY AUDITORIUM, LEVEL 5</h5>
                            <p className="event-venue-2" style={{color: "white"}}>81 Victoria Street<br/>Singapore 188065</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">Deciphering Singapore's National AI Strategy</h1>
                        <br/>
                        <p><strong>Get a head start this new year in understanding Singapore's AI Strategy with SMU Artificial Intelligence! </strong></p>
                        <p>We present to you "Deciphering Singapore's National AI Strategy" with panelists Mr. Huang Jue Jing - Senior Assistant Director for National AI Office, Smart Nation and Digital Government Office, and Prof. Steven Miller - Vice Provost (Research) and Professor of Information Systems (SMU).</p>
                        <p>Find out how the National Artificial Intelligence Office intends to facilitate Singapore's transformation in becoming a Smart Nation leading the world in AI and what plans Singapore has to become a major AI player in this nascent frontier technology.</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <img className="speaker" src={juejing} alt="HUANG JUEJING" />
                                <h6><strong>HUANG JUEJING</strong></h6>
                                <p>Senior Assistant Director, National AI Office, Smart Nation and Digital Government Office</p>
                            </div>
                            <div className="col-sm-6">
                                <img className="speaker" src={miller} alt="STEVEN MILLER" />
                                <h6><strong>STEVEN MILLER</strong></h6>
                                <p>Vice Provost (Research), Professor of Information Systems (Practice), SMU</p>
                            </div>
                        </div>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 15 January 2020, Wednesday<br/><strong>Time:</strong> 6:30 P.M. – 9:30 P.M.<br/><strong>Venue:</strong> SMU Administation Building, Mochtar Riady Auditorium, Level 5</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react"
import "./styles.css"
import background from '../../../Images/landing.jpg'
import michele from '../../../Images/michele.jpg'

export default function Panel3() {
    return (
        <div id="panel3">
            <div className="container">
                <div className="row">
                    <div className="datepanel col-md-3 border" style={{backgroundImage: `url(${background})`}}>
                        <div className="text-center py-lg-5 py-3 mt-md-0 mt-3">
                            <br/><br/><br/>
                            <h3 style={{color: "white"}}>October</h3>
                            <h1 style={{color: "gold"}}>14</h1>
                            <h3 style={{color: "white", borderTop: "1px solid white", paddingTop:"10px"}}>2019</h3>
                            <br/><br/>
                            <h4 style={{color: "gold"}}>VENUE</h4>
                            <h5 className="event-venue" style={{color: "white"}}>SMU ADMINISTRATION BUILDING, UNIVERSITY LOUNGE, LEVEL 6</h5>
                            <p className="event-venue-2" style={{color: "white"}}>81 Victoria Street<br/>Singapore 188065</p>
                            <br/><br/>
                        </div>
                    </div>
                    <div className="col-md-9 pt-lg-5 pt-3 pl-lg-4 text-center">
                        <br/><br/>
                        <h1 className="event-title">SmuAI & StashAway: Ask Me Anything (AMA) Panel Discussion 3</h1>
                        <br/>
                        <p><strong>Do you want to...</strong><br/>Start a business but don’t know where or how to start?<br/>Mingle with like-minded entrepreneurs,<br/>or potentially find a co-founder for your business?</p>
                        <p>Here's your chance to have your burning questions answered at <strong>Kwanpen-IIE Startup AMA (Ask Me Anything)</strong>!</p>
                        <p>In our upcoming AMA on 14th October 2019, Michele Ferrario (CEO & Co-Founder, StashAway / Former Group CEO, ZALORA) will be sharing with us how he managed to scale Zalora up into a Multi-billion dollar company which was eventually bought over by the Global Fashion Group and what he is working on now at StashAway. Don’t miss this opportunity to understand the challenges and motivations behind the decisions Michele made throughout his illustrious career!</p>
                        <br/>
                        <h3 className="panel-speakers">Panel Speaker(s)</h3>
                        <img className="speaker" src={michele} alt="Michele Ferrario" />
                        <h6><strong>MICHELE FERRARIO</strong></h6>
                        <p>CEO & Co-Founder, StashAway<br/>Former Group CEO, ZALORA</p>
                        <br/>
                        <p style={{textAlign: "left"}}><strong>Date:</strong> 14 October 2019, Monday<br/><strong>Time:</strong> 6:30 P.M. – 8:30 P.M.<br/><strong>Venue:</strong> SMU Administation Building, University Lounge, Level 6</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
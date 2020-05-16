import React from "react"
import Slide from "react-reveal/Slide";
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import telegram from '../../Images/telegram.png'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'

const useStyles = makeStyles({
    social: {
        display: "flex",
        flexDirection: "row",
        fontSize: "10px",
        fontWeight: "bold",
    },
})

export default function Contact() {
    const classes = useStyles();

    return (
        <section id="contact">
            <Slide top>
                <h1 className="contact-us">GET IN TOUCH</h1>
            </Slide>

            <Slide bottom>
                <div className="container top-row">
                    <div className="row">
                        <div className="col-lg">
                            <iframe
                                title="SMU IIE Map"
                                id="contact_map"
                                src="https://tools.onemap.sg/amm/amm.html?&marker=latLng:1.2964577,103.8519202!colour:red&zoomLevl=17&popupWidth=200&popupHeight=500&design=Default"
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen
                            />
                        </div>
                        <div className="col-lg">
                            <a href="https://www.smu.edu.sg/"><img src={require('../../Images/smu.png')} className="smu" alt="SMU Logo"/></a>
                            <p className="iie">INSTITUTE OF INNOVATION & ENTREPRENEURSHIP</p>
                            <div className="address">
                                <p>SINGAPORE MANAGEMENT UNIVERSITY</p>
                                <p>Level 9, Administration Building</p>
                                <p>81 Victoria Street</p>
                                <p>Singapore 188065</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <div className="container bottom-row">
                <div className="row">
                    <div className="col-lg contact-section">
                        <Slide top>
                            <h2 className="subtitle">CONTACT US</h2>
                        </Slide>
                        <Slide bottom>
                            <a href="mailto:smuai@sa.smu.edu.sg">
                                <i class="material-icons">email</i><br/>
                                <p className="contact-us-names">smuai@sa.smu.edu.sg</p>
                            </a>
                            <a href="tel:+6568281991">
                                <i class="fa fa-phone"/><br/>
                                <p className="contact-us-names">(65) 6828 1991</p>
                            </a>
                        </Slide>
                    </div>
                    <div className="col-lg social-section">
                        <Slide top>
                            <h2 className="subtitle">SOCIAL MEDIA</h2>
                        </Slide>
                        <Slide bottom>
                            <div className="row">
                                <div className="col-sm socials">
                                    <a href="https://t.me/SmuAI" className={classes.a}>
                                        <img src={telegram} alt="Telegram" className="social-icon"/>
                                        <br/>
                                        <p className="social-name">SmuAI</p>
                                    </a>
                                </div>
                                <div className="col-sm socials">
                                    <a href="https://www.instagram.com/smu.ai/">
                                        <img src={instagram} alt="Instagram" className="social-icon" />
                                        <br/>
                                        <p className="social-name">@smu.ai</p>
                                    </a>
                                </div>
                                <div className="col-sm socials">
                                    <a href="https://www.linkedin.com/company/smu-artificial-intelligence/">
                                        <img src={linkedin} alt="LinkedIn" className="social-icon"/>
                                        <br/>
                                        <p className="social-name">SMU Artificial Intelligence Club</p>
                                    </a>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    )
}

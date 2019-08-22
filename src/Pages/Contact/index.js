import React from "react"
import Slide from "react-reveal/Slide";
import Grid from '@material-ui/core/Grid';
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import telegram from '../../Images/telegram.png'
import { makeStyles } from '@material-ui/core/styles';
// import background from '../../Images/landing.jpg'
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
                                // height="400px"
                                // width="100%"
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
                {/* <Grid container>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                        <iframe
                            title="SMU IIE Map"
                            id="contact_map"
                            src="https://tools.onemap.sg/amm/amm.html?&marker=latLng:1.2964577,103.8519202!colour:red&zoomLevl=17&popupWidth=200&popupHeight=500&design=Default"
                            height="400px"
                            width="70%"
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen
                            style={{marginLeft:"80px"}}
                        />
                    </Grid>
                    <Grid item xs={5} style={{textAlign: "center"}}>
                        <a href="https://www.smu.edu.sg/"><img src={smu} width="100px" alt="SMU Logo"/></a>
                        <p className={classes.iie}>INSTITUTE OF INNOVATION & ENTREPRENEURSHIP</p>
                        <p className={classes.smu}>SINGAPORE MANAGEMENT UNIVERSITY</p>
                        <div className={classes.address}>
                            <p>Level 9, Administration Building</p>
                            <p>81 Victoria Street</p>
                            <p>Singapore 188065</p>
                        </div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid> */}
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
                                    <a href="https://www.instagram.com/smu.ai/">
                                        <img src={instagram} alt="Instagram" className="social-icon" />
                                        <br/>
                                        <p className="social-name">smu.ai</p>
                                    </a>
                                </div>
                                <div className="col-sm socials">
                                    <a href="https://t.me/SmuAI" className={classes.a}>
                                        <img src={telegram} alt="Telegram" className="social-icon"/>
                                        <br/>
                                        <p className="social-name">SmuAI News</p>
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

            {/* <Grid container>
                <Grid item xs={2} />
                <Grid item xs={4} style={{textAlign:"center"}}>
                    <Slide top>
                        <p className={classes.subtitle}>REACH US</p>
                    </Slide>
                    <Slide bottom>
                        <a href="mailto:smuai@sa.smu.edu.sg" className={classes.a} style={{fontSize: "20px"}}>
                            <i class="material-icons" style={{fontSize: "30px", color: "#1b2a52"}}>email</i><br/>
                            <strong>smuai@sa.smu.edu.sg</strong>
                        </a>
                        <br/><br/>
                        <a href="tel:+6568281991" className={classes.a} style={{fontSize: "20px"}}>
                            <i class="fa fa-phone" style={{fontSize: "30px", color: "#1b2a52"}}/><br/>
                            <strong>(65) 6828 1991</strong>
                        </a>
                    </Slide>
                </Grid>
                <Grid item xs={4} style={{textAlign:"center"}} vertical>
                    <Grid xs={12}>
                        <Slide top>
                            <p className={classes.subtitle}>SOCIAL MEDIA</p>
                        </Slide>
                    </Grid>
                    <Grid xs={12} className={classes.social} spacing={5}>
                        <Grid xs={4}>
                            <a href="https://www.instagram.com/smu_ai_club/" className={classes.a}>
                                <img src={instagram} alt="Instagram" height="50px" style={{paddingBottom: "13px"}}/>
                                <br/>smu_ai_club
                            </a>
                        </Grid>
                        <Grid xs={4}>
                            <a href="https://www.linkedin.com/company/smu-artificial-intelligence/" className={classes.a}>
                                <img src={linkedin} alt="LinkedIn" height="50px" style={{paddingBottom: "13px"}}/>
                                <br/>SMU Artificial Intelligence Club
                            </a>
                        </Grid>
                        <Grid xs={4}>
                            <a href="https://t.me/SmuAI" className={classes.a}>
                                <img src={telegram} alt="Telegram" height="50px" style={{paddingBottom: "13px"}}/>
                                <br/>SmuAI News
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </section>
    )
}

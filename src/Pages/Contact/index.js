import React from "react"
import Slide from "react-reveal/Slide";
import Grid from '@material-ui/core/Grid';
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import telegram from '../../Images/telegram.png'
import { makeStyles } from '@material-ui/core/styles';
// import background from '../../Images/landing.jpg'
import smu from '../../Images/smu.png'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
        // color: "white",
        height: "140vh",
        // textAlign: "center"
    },
    title: {
        textAlign: "center",
        fontSize: "50px",
        paddingTop: "100px",
        marginBottom: "70px",
    },
    iie: {
        fontSize: "22px",
        fontWeight: "bold",
    }, 
    smu: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "0px",
    },
    subtitle: {
        fontSize: "30px",
        fontWeight: "bold",
    },
    address: {
        fontSize: "18px",
        fontWeight: "bold",
    },
    social: {
        display: "flex",
        flexDirection: "row",
        fontSize: "10px",
        fontWeight: "bold",
    },
    a: {
        textDecoration: "none",
        color: "black",
        fontSize: "15px",
        // cursor: "pointer",
    }
})

export default function Contact() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Slide top>
                <h1 className={classes.title}>GET IN TOUCH</h1>
            </Slide>

            <Slide bottom>
                <Grid container>
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
                </Grid>
            </Slide>

                <br/><br/><br/><br/>

            <Grid container>
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
                    {/* <Slide bottom> */}
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
                    {/* </Slide> */}
                </Grid>
                {/* <Grid item xs={2} /> */}
            </Grid>
        </section>
    )
}
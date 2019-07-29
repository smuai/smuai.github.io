import React from "react"
import Slide from "react-reveal/Slide";
import Grid from '@material-ui/core/Grid';
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import telegram from '../../Images/telegram.png'
import { makeStyles } from '@material-ui/core/styles';
import background from '../../Images/landing.jpg'

const useStyles = makeStyles({
    root: {
        fontFamily: 'Montserrat',
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "white",
        height: "140vh",
        // textAlign: "center"
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "43px",
        padding: "43px",
    },
    iie: {
        fontSize: "30px",
        fontWeight: "bold",
    }, 
    smu: {
        fontSize: "25px",
        fontWeight: "bold",
    },
    address: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    social: {
        display: "flex",
        flexDirection: "row",
        fontSize: "10px",
    },
    a: {
        textDecoration: "none",
        color: "white",
        fontSize: "15px",
    }
})

export default function Contact() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet"/>
            
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
                        <p className={classes.smu}>REACH US</p>
                    </Slide>
                    <Slide bottom>
                        <a href="mailto:iie@smu.edu.sg" className={classes.a} style={{fontSize: "20px"}}>
                            iie@smu.edu.sg
                        </a>
                        <p style={{fontSize: "20px"}}>(65) 6828 1991</p>
                    </Slide>
                </Grid>
                <Grid item xs={4} style={{textAlign:"center"}} vertical>
                    <Grid xs={12}>
                        <Slide top>
                            <p className={classes.smu}>SOCIAL MEDIA</p>
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
                                    <img src={linkedin} alt="LinkedIn" height="50px" style={{paddingBottom: "5px"}}/>
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
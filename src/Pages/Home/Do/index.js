import React from "react"
// import Vivus from "vivus";
// import ReactVivus from 'react-vivus';
import Grid from '@material-ui/core/Grid';
import bullseye from '../../../Images/bullseye.png'
import discussion from '../../../Images/discussion.png'
import ai from '../../../Images/ai.png'
import Slide from "react-reveal/Slide";
import { makeStyles } from '@material-ui/core/styles';
import background from '../../../Images/landing.jpg'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles({
    root: {
        fontFamily: "Montserrat",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        alignContent: "center",
        overflow: "hidden",
        color: "white",
    },
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: "50px",
        paddingTop: '100px',
        paddingBottom: "50px",
    },
    text: {
        fontSize: "20px",
    },
    grid: {
        paddingBottom: "100px",
        textAlign: "center",
    },
    subtitle: {
        fontsize: "40px",
    }
})

export default function Do() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Slide top>
                <h1 className={classes.title}>WHAT WE DO</h1>
            </Slide>
            <Fade bottom>
                <Grid className={classes.grid} container>
                    <Grid item xs={4} vertical>
                        {/* <div className={classes.subtitle}>Dialogue</div> */}
                        <Grid>
                            <img src={bullseye} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px", marginLeft: "80px"}} className={classes.text}>
                            We facilitate panel discussions between distinguished academics and industry leaders around current topics within the Artificial Intelligence community. 
                        </Grid>
                    </Grid>
                    <Grid item xs={4} vertical>
                        <Grid>
                            <img src={discussion} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px"}} className={classes.text}>
                            We publish newsletters on trends and insights from our Dialogue sessions between industry leaders. 
                        </Grid>
                    </Grid>
                    <Grid item xs={4} vertical>
                        <Grid>
                            <img src={ai} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px", marginRight: "80px"}} className={classes.text}>
                            We work closely with SMU IIE to support entrepreneurs with Artificial Intlligence related projects.
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
        </section>
    )
}
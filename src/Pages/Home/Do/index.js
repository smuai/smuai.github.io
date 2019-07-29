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
                        <Grid>
                            <img src={bullseye} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px", marginLeft: "80px"}} className={classes.text}>
                            We aim to provide SMU students with a holistic understanding of existing AI applications and encourage discussions amongst students, professionals and academics regarding AI’s potential. 
                        </Grid>
                    </Grid>
                    <Grid item xs={4} vertical>
                        <Grid>
                            <img src={discussion} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px"}} className={classes.text}>
                            We organise structured panel discussions where we invite professionals from a wide gamut of disciplines so that students can understand the opportunities and risks of this nascent technology. 
                        </Grid>
                    </Grid>
                    <Grid item xs={4} vertical>
                        <Grid>
                            <img src={ai} width="150px" height="150px" alt=""/>
                        </Grid>
                        <Grid style={{margin: "50px", marginRight: "80px"}} className={classes.text}>
                            We aim to establish a robust AI network within SMU and the wider Singaporean community. 
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
        </section>
    )
}
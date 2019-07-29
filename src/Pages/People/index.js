import React from "react"
import Container from '@material-ui/core/Container';
import Slide from "react-reveal/Slide";
import Grid from '@material-ui/core/Grid';
import Fade from "react-reveal/Fade";
import bio from '../../Data/exco'
import Member from '../../Components/Member'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import background from '../../Images/landing.jpg'

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        color: "white",
        height: "200vh",
        fontFamily: 'Montserrat',
    },
    title: {
        textAlign: "center",
        fontSize: "50px",
        paddingTop: "50px",
        marginBottom: "70px",
    },
    subtitle: {
        fontSize: "30px",
        // font-weight: bold,
        marginLeft: "80px",
        paddingLeft: "20px",
        paddingRight: "25px",
        borderLeft: "2px solid white",
        marginBottom: "70px",
    },
    exco: {
        textAlign: "center",
        overflow: "hidden",
        marginBottom: "30px",
    }
}))

export default function People() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Slide top>
                <h1 className={classes.title}>MEET OUR TEAM</h1>
            </Slide>
            <Container>
                <link href="https://fonts.googleapis.com/css?family=Lora:400,700|Montserrat:300" rel="stylesheet"/>
                <Slide left>
                    <p className={classes.subtitle}>Executive Committee</p>
                </Slide>

                <Grid container style={{marginBottom: "100px"}}>
                    {bio.map(profile => {
                        return (
                            <Grid container xs={3} justify="center" key={profile.key} className={classes.exco}>
                                <Fade bottom>
                                    <Member member={profile} />
                                </Fade>
                            </Grid>
                        );
                    })}
                </Grid>

                <Slide left>
                    <p className={classes.subtitle}>Advisors</p>
                </Slide>

                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper>hi</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>hi</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>hi</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
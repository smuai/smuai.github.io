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
        height: "320vh",
        fontFamily: 'Montserrat',
    },
    title: {
        textAlign: "center",
        fontSize: "50px",
        paddingTop: "100px",
        marginBottom: "70px",
    },
    subtitle: {
        fontSize: "35px",
        // font-weight: bold,
        marginLeft: "80px",
        paddingLeft: "20px",
        paddingRight: "25px",
        borderLeft: "2px solid white",
        marginBottom: "50px",
    },
    exco: {
        textAlign: "center",
        overflow: "hidden",
        marginBottom: "30px",
    },
    advisors: {
        overflow: "hidden",
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
                
                <div className={classes.advisors}>
                    <Fade bottom>
                        <Grid container spacing={3} style={{textAlign: "center", marginBottom: "10px"}}>
                            <Grid item xs>
                                <Paper>
                                    <a href="https://www.smu.edu.sg/faculty/profile/84243/ZHENG-Zhichao-Daniel" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none", color: "black"}}
                                    >
                                        <img src={require('../../Images/danielzheng.jpg')} width="400px" alt="Zheng Zhichao Daniel"/>
                                        <h2>ZHENG ZHICHAO DANIEL</h2>
                                        <h3>Assistant Professor<br/>Operations Management</h3>
                                        <br/>
                                    </a>
                                </Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper>
                                    <a href="https://www.smu.edu.sg/faculty/profile/108226/GOH-Yihan" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none", color: "black"}}
                                    >
                                        <img src={require('../../Images/yihangoh.jpg')} width="400px" alt="Goh Yihan"/>
                                        <h2>GOH YIHAN</h2>
                                        <h3>Associate Professor of Law<br/>Director, Center for AI and Data Governance</h3>
                                    </a>
                                </Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper>
                                    <a href="https://www.smu.edu.sg/faculty/profile/105401/Swapna-GOTTIPATI" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none", color: "black"}}
                                    >
                                        <img src={require('../../Images/swapna.jpg')} width="400px" alt="Goh Yihan"/>
                                        <h2>SWAPNA GOTTIPATI</h2>
                                        <h3>Programme Director,<br/>BSc (IS) Information Systems Major</h3>
                                        <br/>
                                    </a>
                                </Paper>
                            </Grid>
                        </Grid>

                        <Grid container spacing={10} style={{textAlign: "center"}}>
                            <Grid item xs={2}/>
                            <Grid item xs>
                                <Paper>
                                    <a href="https://www.smu.edu.sg/faculty/profile/146776/DAI-Bing-Tian" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none", color: "black"}}
                                    >
                                        <img src={require('../../Images/daibingtian.jpg')} width="352px" alt="Dai Bingtian"/>
                                        <h2>DAI BING TIAN</h2>
                                        <h3>Director,<br/>MITB (Artificial Intelligence)<br/>Programme</h3>
                                        <br/>
                                    </a>
                                </Paper>
                            </Grid>
                            <Grid item xs>
                                <Paper>
                                    <a href="https://www.linkedin.com/in/dr-jonathan-pan-b6590491/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{textDecoration: "none", color: "black"}}
                                    >
                                        <img src={require('../../Images/jonathanpan.jpg')} width="352px" alt="Jonathan Pan"/>
                                        <h2>JOHNATHAN PAN</h2>
                                        <h3>Director, Ministry of Home Affairs<br/>(Robotics, Cybersecurity, <br/>Applied AI)</h3>
                                        <br/>
                                    </a>
                                </Paper>
                            </Grid>
                            <Grid item xs={2}/>
                        </Grid>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}
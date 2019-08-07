import React from "react"
import Vivus from "vivus";
// import ReactVivus from 'react-vivus';
// import Grid from '@material-ui/core/Grid';
// import bullseye from '../../../Images/bullseye.png'
// import discussion from '../../../Images/discussion.png'
// import ai from '../../../Images/ai.png'
import dialog from '../../../Images/dialog.svg'
import research from '../../../Images/research.svg'
import incubate from '../../../Images/incubate.svg'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';
import './styles.css'

// const useStyles = makeStyles({
//     root: {
//         fontFamily: "Montserrat",
//         backgroundImage: `url(${background})`,
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         alignContent: "center",
//         overflow: "hidden",
//         color: "white",
//     },
//     text: {
//         fontSize: "20px",
//     },
//     grid: {
//         paddingBottom: "100px",
//         textAlign: "center",
//     },
//     subtitle: {
//         fontsize: "40px",
//     }
// })

class Do extends React.Component {
    componentDidMount() {
        new Vivus("dialog-icon", {
          duration: 250,
          file: dialog,
          type: "sync",
          start: "inViewport"
        });
        new Vivus("research-icon", {
          duration: 250,
          file: research,
          type: "sync",
          start: "inViewport"
        });
        new Vivus("incubate-icon", {
          duration: 250,
          file: incubate,
          type: "sync",
          start: "inViewport"
        });
    }

    render() {
        return (
            <section id="do">
                <Slide top>
                    <h1 className="what-we-do">WHAT WE DO</h1>
                </Slide>
                <Fade bottom>
                    <div style={{justifyContent: "center", textAlign: "center"}}>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-4">
                                    <h2>DIALOG</h2>
                                    <div class="row" id="dialog-icon"/>
                                    <p>We facilitate panel discussions between distinguished academics and industry leaders within the AI community.</p>
                                </div>
                                <div class="col-4">
                                    <h2>RESEARCH</h2>
                                    <div id="research-icon"/>
                                    <p>We publish newsletters on trends and insights from our Dialogue sessions between industry leaders.</p>
                                </div>
                                <div class="col-4">
                                    <h2>INCUBATE</h2>
                                    <div id="incubate-icon"/>
                                    <p>We work closely with SMU IIE to support entrepreneurs with Artificial Intelligence-related projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Grid className={classes.grid} container>
                        <Grid item xs={4} vertical>
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
                    </Grid> */}
                </Fade>
            </section>
        )
    }
}

export default Do
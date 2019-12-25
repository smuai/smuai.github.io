import React from "react"
import './styles.css'
import Slide from "react-reveal/Slide";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const event = [
    {
        url: "/events/vivace19",
        image: 'https://i.imgur.com/Ptt2EDK.jpg',
        title: "VIVACE 2019",
        subtitle: "VIVACE is SMU’s annual CCA fair where more than 100 student clubs come together, proudly showcasing the best of student life SMU has to offer."
    },
    {
        url: "/events/primer",
        image: "https://i.imgur.com/HqgKQK1.jpg",
        title: "SmuAI Primer Session",
        subtitle: "SmuAI's very first information session, addressing how AI is going to power the next Industrial Revolution and its relevance today."
    },
    {
        url: "/events/panel1",
        image: "https://i.imgur.com/J7RTEdJ.jpg",
        title: "Unlocking Value from AI in Organizations",
        subtitle: "SmuAI's first panel discussion seeks to address the way leading providers of AI solutions are deploying business solutions in client settings to deliver real business value."
    },
    {
        url: "/events/panel2",
        image: "https://i.imgur.com/X2Y2tqB.jpg",
        title: "Building Trust in AI through Transparency and Governance",
        subtitle: "SmuAI's second panel discussion includes introspective conversations on the way ethics is changing our everyday technology and its role in propelling AI forward."
    },
    {
        url: "/events/panel3",
        image: "https://i.imgur.com/giNX2Uq.jpg",
        title: "SmuAI & StashAway: Ask Me Anything (AMA)",
        subtitle: "An exciting entrepreneurial conference with Michele Ferrario, CEO & Co-Founder of StashAway."
    },
];

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
    },
    card: {
        width: 330,
        height: 465,
        [theme.breakpoints.down(1025)]: {
            width: 290
        },
        [theme.breakpoints.down(769)]: {
            width: 330
        },
        [theme.breakpoints.down(321)]: {
            width: 300
        },
    },
    media: {
        height: 240,
    },
}));

const muiStyle = makeStyles({
    root: {
        display: "flex",
    },
    focusHighlight: {
        display: "none",
    },
}, {name: 'MuiCardActionArea'},{
    root: {
        width: 330
    }
}, {name: 'MuiButtonBase'});

export default function Events() {
    // state = {
    //     selectedIndex: 0,
    //     lightboxIsOpen: false,
    // };
    
    // toggleLightbox = () => {
    //     this.setState(state => ({
    //         lightboxIsOpen: !state.lightboxIsOpen,
    //         selectedIndex,
    //     }));
    // };
    const classes = useStyles();
    const classes2 = muiStyle();

    // render() {
        // const { images, isLoading } = this.props;
        // const { selectedIndex, lightboxIsOpen } = this.state;

    return (
        <div id="events">
            <Slide top>
                <h1 className="timeline-title">OUR EVENTS</h1>
            </Slide>
            <div className="container">
                <div className="row">

                    {event.map(ev=>(
                        <div className="col-sm" style={{marginBottom: "25px"}}>
                            <CardActionArea className={classes2.root}>
                            <a href={ev.url} style={{textDecoration: "none"}} className="box">
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={ev.image}
                                    />
                                    <CardContent className='text-center'>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {ev.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {ev.subtitle}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                            </CardActionArea>
                        </div>
                    ))}

                </div>
                <h3 style={{textAlign:"center", marginTop: "45px", marginBottom: "60px"}}>Stay tuned for more exciting events coming your way!</h3>
            </div>
        </div>
    );
    // }
}
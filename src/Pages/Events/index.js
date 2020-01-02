import React from "react"
import './styles.css'
import Slide from "react-reveal/Slide";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const event = [
    {
        url: "http://tiny.cc/cnkzhz",
        image: "https://i.imgur.com/5uKWjkk.jpg",
        title: "Deciphering Singapore's National AI Strategy",
        subtitle: "Find out how the National AI Office facilitates Singapore's transformation to become a Smart Nation.",
        ongoing: true,
    },
    {
        url: "/events/panel3",
        image: "https://i.imgur.com/giNX2Uq.jpg",
        title: "SmuAI & StashAway: Ask Me Anything (AMA)",
        subtitle: "An exciting entrepreneurial conference with Michele Ferrario, CEO & Co-Founder of StashAway.",
        ongoing: false,
    },
    {
        url: "/events/panel2",
        image: "https://i.imgur.com/X2Y2tqB.jpg",
        title: "Transparency and Governance in AI",
        subtitle: "This panel discussion features introspective conversations on the role of ethics in propelling AI forward.",
        ongoing: false,
    },
    {
        url: "/events/panel1",
        image: "https://i.imgur.com/J7RTEdJ.jpg",
        title: "Unlocking Value from AI in Organizations",
        subtitle: "Find out how leading providers of AI solutions are deploying business solutions to deliver business value.",
        ongoing: false,
    },
    {
        url: "/events/primer",
        image: "https://i.imgur.com/HqgKQK1.jpg",
        title: "SmuAI Primer Session",
        subtitle: "SmuAI's very first information session addresses how AI is going to power the next Industrial Revolution and its relevance today.",
        ongoing: false,
    },
    {
        url: "/events/vivace19",
        image: 'https://i.imgur.com/Ptt2EDK.jpg',
        title: "VIVACE 2019",
        subtitle: "VIVACE is SMU’s annual CCA fair where student clubs come together, proudly showcasing the best of student life that SMU has to offer.",
        ongoing: false,
    },
];

const useStyles = makeStyles(theme=>({
    root: {
        flexGrow: 1,
    },
    card: {
        width: 350,
        height: 475,
        [theme.breakpoints.down(1025)]: {
            height: 520,
            width: 290
        },
        [theme.breakpoints.down(769)]: {
            height: 470,
            width: 330
        },
        [theme.breakpoints.down(321)]: {
            width: 300,
            height: 515,
        },
    },
    media: {
        height: 240,
    },
    eventStatus: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'absolute',
        bottom: 25,
        [theme.breakpoints.down(1025)]: {
            bottom: 20
        },
        [theme.breakpoints.down(321)]: {
            bottom: 16
        },
        transform: "translate(-50%)",
        // width: 'auto',
        // right: 'auto',
        left: '50%',
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
                                        <h4><strong>{ev.title}</strong></h4>
                                        <p>{ev.subtitle}</p>
                                    </CardContent>
                                    <div className={classes.eventStatus}>
                                        <Button variant="contained" color={ev.ongoing?"primary":"secondary"}>
                                            {ev.ongoing?"Register":"View Details"}
                                        </Button>
                                    </div>
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
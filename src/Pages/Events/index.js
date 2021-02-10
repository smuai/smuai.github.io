import React from "react"
import './styles.css'
import Slide from "react-reveal/Slide";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const event = [
    {
        url: "/events/ai-in-hr",
        image: "https://i.imgur.com/CYfXHqk.jpg",
        title: "AI in HR",
        subtitle: "Join us in a discussion on how AI is revolutionizing recruitment in human resources",
        ongoing: true
    },
    {
        url: "/events/foodtech",
        image: "https://i.imgur.com/DF4wOCl.jpg",
        title: "Alternative Proteins: Balancing Quantity and Quality",
        subtitle: "Learn the food industry is evolving with AI",
        ongoing: false
    },
    {
        url: "/events/ai-in-se-asia",
        image: "https://imgur.com/93kSxUd.jpg",
        title: "AI Adoption Trends Across Southeast Asia",
        subtitle: "Discover key insights about adoptions of AI in the Southeast Asia",
        ongoing: false
    },
    {
        url: "/events/legal-tech",
        image: "https://imgur.com/FFfhFjr.png",
        title: "AI in Law: Disruptive or Constructive?",
        subtitle: "The development of AI has expanded across the legal industry. Learn how AI will disrupt or improve the industry",
        ongoing: false,
    },
    {
        url: "/events/a-star",
        image: "https://i.imgur.com/gGaf7CQ.jpg",
        title: "AI in R&D: Understanding Humans from an AI Perspective",
        subtitle: "Find out how the R&D department is developing a human-centric AI",
        ongoing: false,
    },
    {
        url: "/events/carousell",
        image: "https://i.imgur.com/PKSgeVN.jpg",
        title: "AI in E-commerce: Carousell's Strategy for Transforming Customer Experience",
        // subtitle: "The nature of work and jobs in the Finance industry is transforming as AI becomes ever more prevalent.",
        ongoing: false,
    },
    {
        url: "https://www.eventbrite.sg/e/ai-and-the-future-of-work-finance-tickets-92313292543",
        image: "https://i.imgur.com/Lo21ciu.jpg",
        title: "Artificial Intelligence & Future of Work (Finance)",
        subtitle: "The nature of work and jobs in the Finance industry is transforming as AI becomes ever more prevalent.",
        ongoing: false,
    },
    {
        url: "/events/grab-panel",
        image: "https://i.imgur.com/KdYGOJh.jpg",
        title: "Understanding Data Science & AI @ Grab",
        subtitle: "Learn how Grab is leveraging Data Science and AI to streamline and accelerate its SEA business operations.",
        ongoing: false,
    },
    {
        url: "/events/panel4",
        image: "https://i.imgur.com/56R8HUl.jpg",
        title: "Deciphering Singapore's National AI Strategy",
        subtitle: "Find out how the National AI Office facilitates Singapore's transformation to become a Smart Nation.",
        ongoing: false,
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
    const classes = useStyles();
    const classes2 = muiStyle();

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
                            <a href={ev.url} target={ev.ongoing?"_blank":null} style={{textDecoration: "none"}} className="box">
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
}
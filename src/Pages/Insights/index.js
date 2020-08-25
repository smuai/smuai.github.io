import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Slide from "react-reveal/Slide";
import './styles.css'

const images = [
    {
        img: 'https://miro.medium.com/max/1094/1*ghDkPYJRJdA7nqm01_1fhA.jpeg',
        title: 'Understanding Grab’s foray into AI — more than just a US$150 million-dollar bet',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/understanding-grabs-foray-into-ai-more-than-a-us-150-million-dollar-bet-95d36c8bcf5d',
        text: "In the recent days, many companies have joined in the bandwagon by investing in AI initiatives. Among them is the South East Asian ride-hailling giant, Grab. While companies failed to report business gains from AI, we will talk about how Grab will make a difference.",
    },
    {
        img: 'https://miro.medium.com/max/4000/1*cBHtohg6mBPzN2TOu1JLxQ.jpeg',
        title: 'Everything you need to know about Singapore’s National AI Strategy',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/everything-you-need-to-know-about-singapores-ai-strategy-dd900f8186d1',
        text: "Here we discuss the National AI Office's framework in crafting AI policy and how strategic timelines are determined, the specific “benefits” that the office is looking for with AI intra-industry wise, and how businesses can better prepare to meet the needs of the \"5 National AI Projects\".",
    },
    {
        img: 'https://miro.medium.com/max/8000/1*avspAVY38CynflA1upwSBw.jpeg',
        title: 'Will China be leading the world in AI by 2030?',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/will-china-be-leading-the-world-in-artificial-intelligence-by-2030-55006e8851a0',
        text: "What are some of China's intentions as the global superpower engages in the heated race for the dominant position in the field of AI? What would be the missing piece to China's grand strategy? Find the answers to these important questions here.",
    },
    {
        img: 'https://miro.medium.com/max/2560/1*RbNJ-vvrFsb7inBLFuqJQQ.jpeg',
        title: 'What we can learn from China’s National AI team Strategy',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/what-could-we-learn-from-chinas-national-ai-team-%E5%9B%BD%E5%AE%B6%E9%98%9F-strategy-3cb4732b3d25',
        text: "SmuAI recently paid a visit to Tencent's headquarters and incubation lab in Shenzhen, China, to get a glimpse into the technology giant’s strategy as being part of China's National AI team.",
    },
    {
        img: 'https://miro.medium.com/max/1966/1*NzeiaxIpqnTq6pGjOjtVLg.jpeg',
        title: 'SmuAI & StashAway: Entrepreneurship AMA',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/smu-ai-meets-michele-ferrario-co-founder-and-ceo-at-stashaway-7ad6e90e2f7a',
        text: "In our third panel discussion, Michele Ferrario (CEO and Co-Founder of StashAway, former CEO of Zalora) shared with the audience his experience transitioning from his highly-coveted career in banking to taking the leap of faith into entrepreneurship.",
    },
    {
        img: 'https://miro.medium.com/max/2000/1*TjuiH3m704jCghlpiwQpwA.jpeg',
        title: 'Building Trust in AI through Transparency & Governance',
        width: '100%',
        link: 'https://medium.com/@smuaiclub/building-trust-in-ai-through-transparency-and-governance-58872d06fdcc',
        text: "Our second edition explores the Emergence of XAI (Explainable AI); how Biases and Unfairness can be mitigated when building AI Models; how Current Governance Frameworks seeks to build trust and transparency; and the market gaps in ensuring Fair and Transparent AI.",
    },
    {
        img: "https://miro.medium.com/max/5200/0*m2Uos8jT8k3D_7-c.png",
        title: "Unlocking the Value of AI in Organisations",
        width: '100%',
        link: "https://medium.com/@smuaiclub/unlocking-value-of-ai-in-organisations-2e19e88ee9df",
        text: `What is Intelligence really? How is the understanding of business context key to creating relevant AI solutions? What are the hidden pains of using OCR? How must AI initiatives be driven by a multidisciplinary team? In our very first insights article, these are the topics we would be exploring.`
    },
];

const useStyles = makeStyles(theme => ({
    image: {
        marginBottom: "60px",
        [theme.breakpoints.down(769)]: {
            marginBottom: "10px",
            height: 350,
        },
        [theme.breakpoints.down(426)]: {
            height: 250,
        },
        [theme.breakpoints.down(376)]: {
            height: 220,
        },
        [theme.breakpoints.down(376)]: {
            height: 200,
        },
        position: 'relative',
        height: 500,
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
                [theme.breakpoints.down(426)]: {
                    border: '2px solid currentColor',
                },
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        textAlign: "center",
        position: 'relative',
        margin: '30px',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        [theme.breakpoints.down(426)]: {
            padding: `${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(1) + 6}px`,
            fontSize: "20px"
        },
        [theme.breakpoints.down(376)]: {
            fontSize: "17px"
        },
        [theme.breakpoints.down(321)]: {
            padding: `${theme.spacing(2)}px ${theme.spacing(1)-3}px ${theme.spacing(1) + 6}px`,
            fontSize: "15px"
        },
        overflow: "hidden",
        fontFamily: 'Montserrat',
    },
    imageMarked: { //the little dash at the bottom of the title
        height: 5,
        width: 25,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    grid: {
        flexGrow: 1,
    },
}));

export default function Insights() {
    const classes = useStyles();

    return (
        <div id="insights">
            <Slide top>
                <h1 className="our-insights">OUR INSIGHTS</h1>
            </Slide>

            {images.map(image => (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 news-imgs">
                            <ButtonBase
                                focusRipple
                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                                href={image.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                    backgroundImage: `url(${image.img})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="h5"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </div>
                        <div className="col-lg">
                            <h5 className="desc">{image.text}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Slide from "react-reveal/Slide";
import './styles.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import panel1 from '../../Images/panel1.png'

const images = [
    {
        url: 'https://gettechss.com/wp-content/uploads/2019/05/Yuval-Noah-Harari-and-Fei-Fei-Li-on-Artificial-Intelligence.jpg',
        title: 'Yuval Noah Harari & Fei-Fei Li on AI',
        width: '100%',
        link: 'https://towardsdatascience.com/yuval-noah-harari-and-fei-fei-li-on-ai-90d9a8686cc5',
        text: "Artificial Intelligence is going to change every facet of our lives in the future, and the decisions and conversations should not be left to its creators who may be blinded from the effects of the technologies that they build. Here's an insightful summary of the conversations between the brightest minds in the industry.",
    },
    {
        url: 'https://cdn.technologyreview.com/i/images/debate-emtech.jpg?sw=1536&cx=0&cy=0&cw=3556&ch=2000',
        title: 'Should we tax robots?',
        width: '100%',
        link: 'https://www.technologyreview.com/f/613693/should-we-tax-robots-a-debate/?utm_campaign=the_download.unpaid.engagement&utm_source=hs_email&utm_medium=email&utm_content=73647734&_hsenc=p2ANqtz-9uR05zuvOR1JCFMze6RRA3p77KBIdBPKD02SudY1s5wOFX6p64to_Y8pndfAfFUWbpsUiii6YrWXF2YrztRjnrLtj4-w&_hsmi=73647734',
        text: 'As digital trends including Artificial Intelligence change the future of work,  Tech Titans like Bill Gates has suggested to implement robot tax to make such technological advancements more socially inclusive. But what are the implications of such a tax? Tune in to the debate here.',
    },
    {
        url: 'https://images.fastcompany.net/image/upload/w_1280,f_jpg,q_auto,fl_lossy/wp-cms/uploads/2019/06/p-1-ethical-ai-has-some-fundamental-bugs.gif',
        title: 'Ethics in AI',
        width: '100%',
        link: 'https://www.fastcompany.com/90356295/the-rush-toward-ethical-ai-is-leaving-many-of-us-behind?utm_campaign=Compass&utm_medium=email&utm_source=Revue%20newsletter',
        text: 'Ethics in AI is crucial but it becomes increasingly difficult when we have to constantly find alignment between the various stakeholders. Here are some considerations that you never knew existed.',
    },
    {
        url: 'https://miro.medium.com/max/1400/1*zSrP-JuKtT9lQEXmGlwW7w.png',
        title: 'Federated Learning',
        width: '100%',
        link: 'https://towardsdatascience.com/the-new-dawn-of-ai-federated-learning-8ccd9ed7fc3a',
        text: "Ever wondered how Google trains its machine learning algorithm without the hassle of collecting your personal data which is a great liability for them in terms of ensuring privacy? This paticular method developed by Google's in house AI scientists allows them to do just that.",
    },
    {
        url: 'https://cdn.technologyreview.com/i/images/sophievanderbroek-1.jpg?sw=5000&cx=0&cy=0&cw=3000&ch=1760',
        title: 'IBM making a comeback with AI',
        width: '100%',
        link: 'https://www.technologyreview.com/s/613736/ai-mit-ibm-tech-business-future-of-work/?utm_campaign=the_algorithm.unpaid.engagement&utm_source=hs_email&utm_medium=email&utm_content=73698648&_hsenc=p2ANqtz-9vGx03b6eNffvEH0gmvt1FkCcOIH2XvqPTLET7_N1h33HES9wpcYqtixxpytXsCHy_OTm51v72qILb7IGzZm9Vvu5_Fw&_hsmi=73698648',
        text: "IBM used to be a powerhouse of AI research, creating the first system to beat the grand master Gary Kasparov in his own game of chess. But with new organsations like OpenAI and even DeepMind, IBM seems to have faded into the background as a technology leader. However, IBM has a plan for a comeback and here's their strategy.",
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
    imageMarked: {
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
    card: {
        maxWidth: 500,
    },
        media: {
        height: 350,
    },
}));

export default function Insights() {
    const classes = useStyles();

    return (
        <div id="insights">
            <Slide top>
                <h1 className="our-insights">OUR INSIGHTS</h1>
            </Slide>

            <div className="container justify-content-center">
                <div className="row justify-content-center">
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={panel1}
                            title="Unlocking Value of AI in Organisations"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Unlocking Value of AI in Organisations
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                In our very first insights article, we would be exploring:<br/>
                                What is Intelligence really? <br/>
                                How understanding business context is key to creating relevant AI solutions<br/>
                                The hidden pains of using OCR <br/>
                                How AI initiatives must be driven by a multidisciplinary team
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions style={{justifyContent: "center"}}>
                            <Button size="small" color="primary" href="https://medium.com/@smuaiclub/unlocking-value-of-ai-in-organisations-2e19e88ee9df" target="_blank">
                                VIEW
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <br/><br/><br/>
            </div>

            {images.map(image => (
                <div className="container justify-content-center">
                    <div className="row justify-content-center">
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
                                    backgroundImage: `url(${image.url})`,
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
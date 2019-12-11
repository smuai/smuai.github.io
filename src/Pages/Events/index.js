import React from "react"
import './styles.css'
// import Carousel, { Modal, ModalGateway } from 'react-images';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Slide from "react-reveal/Slide";

//timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//icons
import { FaComments } from 'react-icons/fa';
import { FaBusinessTime } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaLandmark } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';

const carousel = [
    {
        title: 'VIVACE 2019',
        subtitle: `Friday, August 16`,
        image: require("../../Images/vivace.png"),
    },
    {
        title: 'SmuAI Primer',
        subtitle: `Wednesday, August 21`,
        image: require("../../Images/primer.jpg"),
    },
    {
        title: 'Unlocking Value from AI in Organizations',
        subtitle: `Wednesday, August 28`,
        image: require("../../Images/panel1.jpg"),
    },
    {
        title: 'Building Trust in AI through Transparency and Governance',
        subtitle: `Wednesday, September 18`,
        image: require("../../Images/panel2.png"),
    },
]

const gallery = [
    {
        src: require('../../Images/vivace-1.jpg'),
        thumbnail: require('../../Images/vivace-1-thumbnail.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "SmuAI @ Vivace!"
    },
    {
        src: require('../../Images/panel1-1.png'),
        thumbnail: require('../../Images/panel1-1.png'),
        thumbnailWidth: 300,
        thumbnailHeight: 225,
        caption: "Artificial Intelligence in Business - Unlocking Value from AI in Organizations"
    },
    {
        src: require('../../Images/primer-1.jpg'),
        thumbnail: require('../../Images/primer-1-thumbnail.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "President Sheldon's sharing @ SmuAI Primer"
    },
    {
        src: require('../../Images/panel1-2.JPG'),
        thumbnail: require('../../Images/panel1-2.JPG'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "Full-house at SmuAI's first panel discussion"
    },
    {
        src: require('../../Images/panel2-1.JPG'),
        thumbnail: require('../../Images/panel2-1.JPG'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "Artificial Intelligence in Business - Building Trust in AI through Transparency and Governance"
    },
    {
        src: require('../../Images/panel2-2.jpg'),
        thumbnail: require('../../Images/panel2-2.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "Lively sharing by Jason, Associate Director of Data Science at Merck Sharp & Dohme Corp"
    },
    {
        src: require('../../Images/panel2-3.jpg'),
        thumbnail: require('../../Images/panel2-3.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "An insightful second panel discussion brought to you by SmuAI"
    },
    {
        src: require('../../Images/panel1-3.JPG'),
        thumbnail: require('../../Images/panel1-3-thumbnail.jpg'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "Presenting tokens of appreciation to our distinguished panelists"
    },
    {
        src: require('../../Images/panel2-4.JPG'),
        thumbnail: require('../../Images/panel2-4.JPG'),
        thumbnailWidth: 200,
        thumbnailHeight: 150,
        caption: "Malavika sharing with the audience key points on Machine Learning"
    },
]

export default class Home extends React.Component {
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

    render() {
        // const { images, isLoading } = this.props;
        // const { selectedIndex, lightboxIsOpen } = this.state;

        return (
            <div id="events">
            <div className="container">
                <Slide top>
                    <h1 className="timeline-title">TIMELINE OF EVENTS</h1>
                </Slide>
                
                <div className="timeline" style={{backgroundColor:"rgb(227, 227, 227)"}}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(181, 222, 255)', color: '#000000' }} //speech bubble background color + text color
                        contentArrowStyle={{ borderRight: '7px solid  rgb(181, 222, 255)' }} // speech bubble arrow color
                        date="APRIL 2019"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // icon background + color
                        icon={<FaLandmark />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">Establishment</h4>
                        <p>
                            SmuAI was founded and established in April 2019.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 199, 199)', color: '#000000' }} //speech bubble background color + text color
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 199, 199)' }} // speech bubble arrow color
                        date="16 AUGUST 2019 (FRIDAY)"
                        iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }} // icon background + color
                        icon={<FaCalendarAlt />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">VIVACE 2019</h4>
                        <p>
                            VIVACE is SMU’s annual CCA fair where more than 100 student clubs come together, proudly showcasing the best of student life SMU has to offer.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(205, 199, 235)', color: '#000000' }} //speech bubble background color + text color
                        contentArrowStyle={{ borderRight: '7px solid  rgb(205, 199, 235)' }} // speech bubble arrow color
                        date="21 AUGUST 2019 (WEDNESDAY)"
                        iconStyle={{ background: 'rgb(23, 14, 71)', color: '#fff' }}
                        icon={<FaInfo />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">SmuAI Primer Session</h4>
                        <p>
                            SmuAI's very first information session, addressing how AI is going to power the next Industrial Revolution and its relevance today.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 238, 209)', color: '#000000' }} //speech bubble background color + text color
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 238, 209)' }} // speech bubble arrow color
                        date="28 AUGUST 2019 (WEDNESDAY)"
                        iconStyle={{ background: 'rgb(255, 153, 0)', color: '#fff' }}
                        icon={<FaBusinessTime />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence in Business: Unlocking Value from AI in Organizations</h4>
                        <p>
                            SmuAI's first panel discussion seeks to address the way leading providers of AI solutions are deploying business solutions in client settings and how it is delivering real business value.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(217, 255, 230)', color: '#000000' }} //speech bubble background color + text color
                        contentArrowStyle={{ borderRight: '7px solid  rgb(217, 255, 230)' }} // speech bubble arrow color
                        date="18 SEPTEMBER 2019 (WEDNESDAY)"
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaComments />}
                    >
                        <h4 className="vertical-timeline-element-subtitle">Artificial Intelligence in Business: Building Trust in AI through Transparency and Governance</h4>
                        <p>
                            SmuAI's second panel discussion includes introspective conversations on the way ethics is changing our everyday technology and its role in propelling AI forward.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                </div>

                <div className="row">
                    <div className="col-lg-5">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                            </ol>

                            {/* images */}
                            <div className="carousel-inner">
                                {/* events */}
                                {carousel.map(item => (
                                    <div className={item==carousel[0]?"carousel-item active":"carousel-item"}>
                                        <img className="d-block w-100" src={item.image}/>
                                        {/* <div class="carousel-caption d-none d-md-block">
                                            <h5>{item.title}</h5>
                                            <h6>{item.subtitle}</h6>
                                        </div> */}
                                    </div>
                                ))}
                            </div>

                            {/* left and right arrows */}
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-1"></div>
                    
                    <div className="col-lg-6">
                        {/* <ModalGateway>
                            {modalIsOpen ? (
                            <Modal onClose={this.toggleModal}>
                                <Carousel views={gallery} />
                            </Modal>
                            ) : null}
                        </ModalGateway> */}
                        <div style={{
                            display: "block",
                            minHeight: "1px",
                            width: "100%",
                            overflow: "auto"}}
                        >
                            <Gallery id="gallery" images={gallery} enableImageSelection={false} />
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
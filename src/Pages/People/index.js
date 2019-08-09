import React from "react"
import Container from '@material-ui/core/Container';
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import bio from '../../Data/exco'
import Member from '../../Components/Member'
import './styles.css'

const advisors = [
    {
        name: "ZHENG ZHICHAO DANIEL",
        position1: "Assistant Professor",
        position2: "Operations Management",
        image: 'https://staffphoto.smu.edu.sg/s/danielzheng/600x400',
        link: 'https://www.smu.edu.sg/faculty/profile/84243/ZHENG-Zhichao-Daniel',
        row: 1,
    },
    {
        name: 'GOH YIHAN',
        position1: 'Associate Professor of Law',
        position2: 'Director, Center for AI and Data Governance',
        image: "https://staffphoto.smu.edu.sg/s/yihangoh/600x400",
        link: "https://www.smu.edu.sg/faculty/profile/108226/GOH-Yihan",
        row: 1,
    },
    {
        name: 'SWAPNA GOTTIPATI',
        position1: 'Programme Director,',
        position2: 'BSc (IS) Information Systems Major',
        image: 'https://staffphoto.smu.edu.sg/s/swapnag/600x400',
        link: "https://www.smu.edu.sg/faculty/profile/105401/Swapna-GOTTIPATI",
        row: 1,
    },
    {
        name: 'DAI BING TIAN',
        position1: 'Director,',
        position2: 'MITB (AI) Programme',
        image: 'https://sis.smu.edu.sg/sites/sis.smu.edu.sg/files/sis/programmes/MITB/images/new-site-2018/faculty/full/faculty-pic-dai-bing-tian.jpg',
        link: "https://www.smu.edu.sg/faculty/profile/146776/DAI-Bing-Tian",
        row: 2,
    },
    {
        name: 'JOHNATHAN PAN',
        position1: 'Director, Ministry of Home Affairs',
        position2: '(Robotics, Cybersecurity, Applied AI)',
        image: 'https://i1.rgstatic.net/ii/profile.image/788036329680902-1564893910210_Q512/Jonathan_Pan4.jpg',
        link: "https://www.linkedin.com/in/dr-jonathan-pan-b6590491/",
        row: 2,
    },
]

export default function People() {
    
    return (
        <div id="people">
            <Slide top>
                <h1 className="meet-our-team">MEET OUR TEAM</h1>
            </Slide>
            <Container>
                <Slide left>
                    <p className="executive-committee">Executive Committee</p>
                </Slide>

                <div className="container">
                    <div class="row justify-content-center">
                        {bio.map(profile => {
                            return (
                                <div className="col-sm exco-profile">
                                    <Fade bottom>
                                        <Member member={profile} />
                                    </Fade>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <Slide left>
                    <p className="executive-committee">Advisors</p>
                </Slide>
                
                <div className="advisors">
                    <Fade bottom>
                        <div className="container">
                            <div className="row justify-content-center">
                                {advisors.map(advisor => {
                                    return (
                                        <div className="col-lg advisor-profile">
                                            <a href={advisor.link}>
                                                <Fade bottom>
                                                    <img className="advisor-img" src={advisor.image} alt={advisor.name} height="233px" />
                                                    <h4 className="advisor-name"><strong>{advisor.name}</strong></h4>
                                                    {/* <br/> */}
                                                    <h5 className="advisor-position">{advisor.position1}<br/>{advisor.position2}</h5>
                                                </Fade>
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}
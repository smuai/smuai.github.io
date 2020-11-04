import React from "react"
import Container from '@material-ui/core/Container';
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import bio1 from '../../Data/exco1'
import bio2 from '../../Data/exco2'
import Member from '../../Components/Member'
import './styles.css'

const advisors = [
    {
        name: 'STEVEN MILLER',
        position1: 'Professor Emeritus of Information Systems, Singapore Management University',
        position2: 'Founder and Principal Consultant, Hybrid Intelligence Advisory',
        image: "https://staffphoto.smu.edu.sg/s/stevenmiller/600x400",
        link: "https://www.smu.edu.sg/faculty/profile/9631/Steven-MILLER",
        size: "big",
    },
    {
        name: 'GOH YIHAN',
        position1: 'Professor of Law, Singapore Management University',
        position2: 'Principal Investigator, Center for AI and Data Governance',
        image: "https://staffphoto.smu.edu.sg/s/yihangoh/600x400",
        link: "https://www.smu.edu.sg/faculty/profile/108226/GOH-Yihan",
        size: "big",
    },
    {
        name: 'DAI BING TIAN',
        position1: 'Director,',
        position2: 'MITB (AI) Programme, Singapore Management University',
        image: 'https://sis.smu.edu.sg/sites/sis.smu.edu.sg/files/sis/programmes/MITB/images/new-site-2018/faculty/full/faculty-pic-dai-bing-tian.jpg',
        link: "https://www.smu.edu.sg/faculty/profile/146776/DAI-Bing-Tian",
        size: "small",
    },
    {
        name: 'JOHNATHAN PAN',
        position1: 'Chief (Disruptive Technologies Office),',
        position2: 'Home Team Science and Technology Agency',
        image: 'https://i1.rgstatic.net/ii/profile.image/788036329680902-1564893910210_Q512/Jonathan_Pan4.jpg',
        link: "https://www.linkedin.com/in/dr-jonathan-pan-b6590491/",
        size: "medium",
    },
    {
        name: 'SWAPNA GOTTIPATI',
        position1: 'Associate Dean,',
        position2: 'BSc (IS) Information Systems Major, Singapore Management University',
        image: 'https://staffphoto.smu.edu.sg/s/swapnag/600x400',
        link: "https://www.smu.edu.sg/faculty/profile/105401/Swapna-GOTTIPATI",
        size: "big",
    },
    {
        name: "ZHENG ZHICHAO DANIEL",
        position1: "Associate Professor,",
        position2: "Operations Management, Singapore Management University",
        image: 'https://staffphoto.smu.edu.sg/s/danielzheng/600x400',
        link: 'https://www.smu.edu.sg/faculty/profile/84243/ZHENG-Zhichao-Daniel',
        size: "big",
    },
    {
        name: "ZHAOXIA WANG",
        position1: "Associate Professor of Information Systems,",
        position2: "Singpaore Management University",
        image: 'https://sis.smu.edu.sg/sites/sis.smu.edu.sg/files/sis/programmes/MITB/images/new-site-2018/faculty/adjunct/faculty-pic-wang-zhaoxia.jpg',
        link: 'https://www.smu.edu.sg/faculty/profile/161841/WANG-Zhaoxia',
        size: "big",
    }
]

export default function People() {
    return (
        <div id="people">
            <Slide top>
                <h1 className="meet-our-team">MEET OUR TEAM</h1>
            </Slide>
            <Container>
                 <Slide left>
                    <p className="executive-committee">Second Executive Committee (Academic Year 2020-2021)</p>
                </Slide>
                <div className="container">
                    <div class="row justify-content-center">
                        {bio2.map(profile => {
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
                                        <div className={advisor.name==="JOHNATHAN PAN"||advisor.name==="DAI BING TIAN" ? "col-lg-6 col-sm text-center advisor-profile" : 'col-lg advisor-profile'}>
                                            <a href={advisor.link}>
                                                <Fade bottom>
                                                    <img className="advisor-img" src={advisor.image} alt={advisor.name} height={advisor.size==="big" ? "300px" : "200px"} />
                                                    <h4 className="advisor-name"><strong>{advisor.name}</strong></h4>
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

                <Slide left> 
                    <p className="executive-committee">First Executive Committee (Academic Year 2019-2020)</p>
                </Slide>
                <div className="container">
                    <div class="row justify-content-center">
                        {bio1.map(profile => {
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
            </Container>
        </div>
    )
}
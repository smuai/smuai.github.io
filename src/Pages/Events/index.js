import React from "react"
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from 'react-image-gallery';
import event1 from '../../Images/event1.jpg'
import './styles.css'
import { ImageGroup, Image } from 'react-fullscreen-image'

export default function Events () {
    // const prefix_url = "http://localhost:3001";

    // const images = [
    //     {
    //         original: `${prefix_url}${event1}`,
    //         thumbnail: `${prefix_url}${event1}`,
    //         sizes: "500px"
    //     },
    // ]

    const images = [
        'https://i.imgur.com/jyalweJ.jpg',
    ]

    return (
        <section id="events">
            <h1 className="our-events">OUR EVENTS</h1>
            {/* <ImageGallery items={images}/> */}
            <img src={event1} className="poster" alt="Event 1"/>

            {/* <ImageGroup style={{height: "auto", width: "500px"}}>
                <ul className="images">
                    {images.map(i => (
                    <li key={i}>
                        <Image
                            src={i}
                            alt="nature"
                            height="100vh"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: '100%',
                                width: '100%',
                                // objectFit: 'cover',
                            }}
                        />
                    </li>
                    ))}
                </ul>
            </ImageGroup> */}
        </section>
    )
}
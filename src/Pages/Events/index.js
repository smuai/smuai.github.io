import React from "react"
// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from 'react-image-gallery';
import event1 from '../../Images/event1.jpg'

export default function Events () {
    // const prefix_url = "http://localhost:3001";

    // const images = [
    //     {
    //         original: `${prefix_url}${event1}`,
    //         thumbnail: `${prefix_url}${event1}`,
    //         sizes: "500px"
    //     },
    // ]

    return (
        <div>
            {/* <ImageGallery items={images}/> */}
            <img src={event1} height="700px" style={{display: "block", margin: "auto", paddingTop: "80px"}} alt="Event 1"/>
        </div>
    )
}
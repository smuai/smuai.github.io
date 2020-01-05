import React from "react"
import './styles.css'

export default function Footer(props) {    
    return (
        <section id="footer" style={{backgroundColor: props.color}}>                
            <center>
                <h5 className="footer-text">This site is proudly designed and developed by SmuAI. Kindly contact <a target="_blank" rel="noopener noreferrer" href="https://t.me/SlaveToJavascript" style={{textDecoration: "none", color: "navy"}}><strong>@SlaveToJavascript</strong></a> on Telegram for enquiries/feedback.</h5>
            </center>
        </section>
    )
}
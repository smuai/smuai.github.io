import React from "react"
import './styles.css'

export default function Footer(props) {    
    return (
        <section id="footer" style={{backgroundColor: props.color}}>                
            <center>
                <h5 style={{fontSize: "18px"}}>This site is proudly designed and developed by SmuAI.<br/>Kindly contact <a href="https://t.me/slavetojavascript" style={{textDecoration: "none", color: "navy"}}>@SlaveToJavascript</a> on Telegram for enquiries/feedback.</h5>
            </center>
        </section>
    )
}
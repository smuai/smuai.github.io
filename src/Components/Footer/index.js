import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        // color: "#1b2a52",
        fontFamily: "Montserrat",
        // backgroundColor: "#c2c2c2"
    }
})

export default function Footer(props) {
    const classes = useStyles();
    
    return (
        <section className={classes.root} style={{backgroundColor: props.color}}>                
            <center>
                <h5 style={{ fontSize: "18px"}}>Proudly designed and developed by SmuAI.<br/>For enquiries/feedback on the website, kindly contact <a href="https://t.me/slavetojavascript" style={{textDecoration: "none", color: "#1b2a52"}}>@SlaveToJavascript</a> on Telegram.</h5>
            </center>
        </section>
    )
}
import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: "#1b2a52",
        fontFamily: "Montserrat",
    }
})

export default function Footer() {
    const classes = useStyles();
    
    return (
        <section className={classes.root}>
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-2" />
                        <div id="footer-nav-row" className="col-md-8 d-flex justify-content-center">
                            <center>
                                <h5 style={{ fontSize: "18px"}}>Copyright © 2019 SmuAI. All rights reserved.</h5>
                            </center>
                        </div>
                    <div className="col-sm-2" />
                </div>
            </div>
        </section>
    )
}
import React, { useEffect } from "react"
import Landing from "./Landing";
import About from "./About";
import Do from "./Do"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }
})

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Landing/>
            <About/>
            <Do/>
        </div>
    )
}
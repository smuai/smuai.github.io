import React, { useEffect } from "react"
import Landing from "./Landing";
import About from "./About";
import Do from "./Do"
import { makeStyles } from '@material-ui/core/styles';
// import {Helmet} from "react-helmet";

const useStyles = makeStyles({
    root: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    }
})

export default function Home() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "https://www.googletagmanager.com/gtag/js?id=UA-156160413-2";
    //     script.async = true;
    // }, [])

    const classes = useStyles();

    return (
        <div>
            <Landing/>
            <About/>
            <Do/>
        </div>
    )
}
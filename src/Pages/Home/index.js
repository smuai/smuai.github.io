import React from "react"
import Landing from "./Landing";
import About from "./About";
import Do from "./Do"

class Home extends React.Component {
    render() {
        return (
            <div className="content">
                <Landing ref="landing"/>
                <About ref="about"/>
                <Do ref="do"/>
            </div>
        )
    }
}

export default Home;
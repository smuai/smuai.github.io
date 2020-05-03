import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Pages/Home"
import People from "./Pages/People"
import Insights from "./Pages/Insights"
import Footer from './Components/Footer'
import Events from "./Pages/Events"
import Contact from "./Pages/Contact"
import Vivace19 from "./Pages/Events/Vivace19"
import Panel4 from "./Pages/Events/Panel4"
import Panel3 from "./Pages/Events/Panel3"
import Panel2 from "./Pages/Events/Panel2"
import Panel1 from "./Pages/Events/Panel1"
import Primer from "./Pages/Events/Primer"
import GrabPanel from "./Pages/Events/GrabPanel"

class App extends React.Component {
  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  render() {    
    return (
      <Router>
        <section>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={People} />
            <Route exact path="/insights" component={Insights}/>
            <Route exact path="/events" component={Events}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/events/vivace19" component={Vivace19}/>
            <Route exact path="/events/grab-panel" component={GrabPanel}/>
            <Route exact path="/events/panel4" component={Panel4}/>
            <Route exact path="/events/panel3" component={Panel3}/>
            <Route exact path="/events/panel2" component={Panel2}/>
            <Route exact path="/events/panel1" component={Panel1}/>
            <Route exact path="/events/primer" component={Primer}/>
          </Switch>

          <footer>
            <Footer color="#f2f2f2"/>
          </footer>
        </section>
      </Router>
    );
  }
}

export default App;

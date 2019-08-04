import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './Components/Header'
import Home from "./Pages/Home"
import People from "./Pages/People"
import Insights from "./Pages/Insights"
import Footer from './Components/Footer'
import Events from "./Pages/Events"
import Contact from "./Pages/Contact"

class App extends React.Component {
  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }

  render() {
    return (
      <Router>
        <section className="hero is-fullheight">
          <div className="hero-head">
            <Header/>
          </div>
          <div className="hero-body">
            <div id="app-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/people" component={People} />
                <Route exact path="/insights" component={Insights}/>
                <Route exact path="/events" component={Events}/>
                <Route exact path="/contact" component={Contact}/>
              </Switch>
            </div>
          </div>

          <footer id="hero_footer">
            <div className="container">
              <Footer color="#c7c7c7"/>
            </div>
          </footer>
        </section>
      </Router>
    );
  }
}

export default App;

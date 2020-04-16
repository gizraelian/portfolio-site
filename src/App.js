import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from './Navbar';
import Main from './Main';
import About from './About';
import Footer from './Footer';
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <div>
              <Switch>
                <Route path="/main" exact component={Main} />
                <Route exact path="/" render={() =><Redirect to='/main'/>} />
                <Route path="/about" exact component={About} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

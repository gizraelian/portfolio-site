import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
// import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from './Navbar';
import Main from './Main';
import BandpageInfo from './BandpageInfo';
import BrainFlixInfo from './BrainFlixInfo';
import PortfolioInfo from './PortfolioInfo';
import IvgInfo from './IvgInfo';
import About from './About';
import Footer from './Footer';
import ScrollIntoView from './ScrollIntoView';
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ScrollIntoView>
            <Navbar />
            <div>
              <Switch>
                <Route path="/main" exact component={Main} />
                <Route exact path="/" render={() =><Redirect to='/main'/>} />
                <Route path="/bandpage" exact component={BandpageInfo} />
                <Route path="/brainflix" exact component={BrainFlixInfo} />
                <Route path="/portfolio" exact component={PortfolioInfo} />
                <Route path="/ivg" exact component={IvgInfo} />
                <Route path="/about" exact component={About} />
              </Switch>
            </div>
            <Footer />
            </ScrollIntoView>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

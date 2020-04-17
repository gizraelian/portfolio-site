import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import Navbar from './navbar';
import Main from './main';
import BandpageInfo from './bandpageinfo';
import BrainFlixInfo from './brainflixinfo';
import PortfolioInfo from './portfolioinfo';
import IvgInfo from './ivginfo';
import Footer from './footer';
import ScrollIntoView from './scrollintoview';
import './css/styles.css'
import './css/navbar.css'
import './css/main.css'
import './css/projectinfo.css'
import './css/footer.css'

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
                <Route path="/" exact component={Main} />
                {/* <Route path="/main" exact component={Main} />
                <Route exact path="/" render={() =><Redirect to='/main'/>} /> */}
                <Route path="/bandpage" exact component={BandpageInfo} />
                <Route path="/brainflix" exact component={BrainFlixInfo} />
                <Route path="/portfolio" exact component={PortfolioInfo} />
                <Route path="/ivg" exact component={IvgInfo} />
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

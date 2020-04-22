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
import './css/styles.css';
import './css/projectinfo.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        scrolled: false,
    };  
  }

  componentDidMount(){
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== true){
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  sendProps(scrolled) {
    this.setState({scrolled});
  }

  render() {
    // console.log(this.state.scrolled);
    return (
      <div>
        <Router>
          <div>
            <ScrollIntoView>
            <Navbar sendProps={this.sendProps.bind(this)} scrolled={this.state.scrolled} /> 
            <div>
              <Switch>
                {/* <Route path="/" exact component={Main} /> */}
                <Route path="/main" render={() => <Main sendProps={this.sendProps.bind(this)} scrolled={this.state.scrolled} /> } />
                <Route exact path="/" render={() =><Redirect to='/main'/>} />
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

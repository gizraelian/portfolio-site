import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
import Navbar from './navbar';
import Main from './main';
import About from './about';
import Footer from './footer';
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

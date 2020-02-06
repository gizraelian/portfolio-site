import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';
// import TopBar from './TopBar';
// import Main from './Main';
import './css/styles.css'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <div>
          
            <TopBar />
              <div>
                <Switch>
                  <Route path="/main" exact component={Main} />
                  <Route exact path="/" render={() =><Redirect to='/main'/>} />
                  <Route path="/custom_orders" exact component={CustomOrders} />
                  <Route path="/spun_fiber" exact component={SpunFiber} />
                  <Route path="/applications" exact component={applications} />
                  <Route path="/metal_fiber" exact component={MetalFiber} />
                  <Route path="/About" exact component={About} />
                </Switch>
              </div>
          </div>
        </Router> */}
      </div>
    );
  }
}

export default App;

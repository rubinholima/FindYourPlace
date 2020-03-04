import React, { Component } from 'react';
import './App.css';
import Nav from './components/navigation/nav.js';
import Dashboard from './components/dashboard/dashboard.js';
import AllCountries from './components/allcountries/allcountries.js';
import CountryDetail from './components/countrydetail/countrydetail.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      
      <div className="fluid-container">
    
        <Router>
          <div>
            <Nav />
            <div className="copyArea container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/country/:alpha2Code" component={CountryDetail} />
                <Route path="/:reg" component={AllCountries} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

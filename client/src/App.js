import React, { Component } from 'react';
import './App.css';
import Nav from './components/navigation/nav';
import Dashboard from './components/dashboard/dashboard';
import AllCountries from './components/allcountries/allcountries';
import CountryDetail from './components/countrydetail/countrydetail';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (

      <div className="fluid-container">

        <Router >
          <div>
            <Nav />

            <div className="copyArea container">
              <Switch >
                <Route exact path="/" component={Dashboard} />
                <Route path="/country/:alpha2Code" component={CountryDetail} />
                <Route path="/:reg"  component={AllCountries} />
              </Switch>
            </div>
          </div>

          <Redirect exact from="/" to="all" />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './dashboard';
import AllCountries from "../allcountries/allcountries";
import Footer from '../footer/footer';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <AllCountries />
                <Footer />
            </div>
        );
    }
}

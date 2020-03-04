import React, { Component } from 'react';
import './dashboard.css';
import Maps from "../Maps/MapsR";
import Footer from '../footer/footer';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Maps />
                <Footer />

            </div>
        );
    }
}

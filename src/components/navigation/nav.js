import React, { Component } from 'react';
import './nav.css';

import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <Link className="nav-link" to="/">Find You Place</Link>
                            </li>
                            <li class="nav-item active">
                                <Link className="nav-link" to={`/${'all'}`}>All Countries</Link>

                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
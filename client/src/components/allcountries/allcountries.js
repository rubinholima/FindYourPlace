import React, { Component } from 'react';
import './allcountries.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import Maps from "../Maps/MapsR";
import Footer from "../footer/footer"

export default class AllCountries extends Component {

    state = {
        count: 0,
        countries: [],
        visCountries: [],
        length: 0
    };

    componentDidMount() {

        const match = this.props.match || { params: { reg: 'all' } };
        const path = (match.params.reg !== 'all') ? `https://restcountries.eu/rest/v2/region/${match.params.reg}` : 'https://restcountries.eu/rest/v2/all';
        axios.get(path).then(response => {
            this.setState({
                countries: response.data,
                visCountries: response.data,
                length: response.data.length
            });
        });

    }


    sortData = (event) => {
        const sortParam = event.target.value;
        const sortCountries = this.state.countries.sort((a, b) => {
            return b[sortParam] - a[sortParam]
        });
        this.setState({
            count: 0,
            visCountries: sortCountries,
            length: sortCountries.length
        });
    }

    filterCountries = () => {
        let keyworld = this.filterText.value.toLowerCase();
        const filterCountryList = this.state.countries.filter(country => {
            let countryArr = country.name.toLowerCase();
            return countryArr.indexOf(keyworld) !== -1;
        });
        this.setState({
            count: 0,
            visCountries: filterCountryList,
            length: filterCountryList.length
        });
    };


    render() {
        return (

            <div>

                <nav className="navbar filterRow text-white bg-dark">
                    < div className="col-md-2">
                        <h5 className="text-right">All Countries <span className="badge badge-secondary">{this.state.length}</span></h5>
                    </ div>
                    <div className="col-md-6">
                        <label className="text-right col-md-5">Search by Country Name: </label>
                        <input type="text" onChange={this.filterCountries} ref={node => (this.filterText = node)} className="col-md-7 searchBox" />
                    </div>
                    <div className="col-md-4">
                        <label className="col-md-4 text-right">Sort by: </label>
                        <select onChange={this.sortData} className="col-md-8 sortDD">
                            <option value="country">Country Name</option>
                            <option value="population">Population</option>
                            <option value="area">Area</option>
                        </select>
                    </div>
                </nav>

                <section className="allCountryList">

                    <div className="listof">
                        <div className="row copyArea">
                            <div className="col-md-8 mappe">
                                <Maps />
                            </div>
                            <div className="col-md-4 cardcolm cardTotal" >

                                {this.state.visCountries.map(country => {
                                    this.state.count++
                                    return (
                                        <div className="cardlist" key={country.alpha2Code}>

                                            <div className="card">

                                                <h5 className="card-header bg-secondary alert-info text-white">{this.state.count}: {country.name}</h5>
                                                <div className="card-body row cardBoardRow">
                                                    <div className="col-md-5 text-center"><img className="imgCountry" src={country.flag} alt="..." /></div>
                                                    <div className="col-md-7 desc">
                                                        <p><b>Capital: </b> {country.capital}</p>
                                                        <p><b>Region:</b> {country.region}</p>
                                                        <p><b>Population: </b> <NumberFormat value={country.population} displayType={'text'} thousandSeparator={true} prefix={''} /></p>
                                                        <p><b>Area: </b> <NumberFormat value={country.area} displayType={'text'} thousandSeparator={true} prefix={''} /> m<sup>2</sup></p>
                                                        <p><b>Alpha Code: </b> {country.alpha2Code}</p>
                                                    </div>
                                                </div>
                                                <div className="card-footer ">
                                                    <NavLink to={`/country/${country.alpha2Code}`} className="text-info">Country Detail</NavLink>
                                                </div>
                                            </div>

                                        </div>

                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </section>

            </div>


        );
    }
}
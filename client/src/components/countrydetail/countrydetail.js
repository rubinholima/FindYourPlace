import React, { Component } from 'react';
import './countrydetail.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Map from '../Maps/MapsR'
import ResultList from "../ResultList/index";
import APIGif from "../../utils/APIGif"
import Footer from "../footer/footer"



let mapProps = {}
let localC = {
    lat: 0,
    lng: 0
}
let nameC = ""
export default class CountryDetail extends Component {

    searchGiphy = query => {
        APIGif.search(query)
            .then(muda => this.setState({ ...this.state, results: muda.data.data }))
            .catch(err99 => console.log(err99));
    };


    state = {
        countryDetail: [],
        otherCountries: [],
        currency: [],
        bord: [],
        lang: [],
        results: [],
        search: "",
        countryDetailTour: [],
        coord: [],

    };


    componentDidMount() {

        const { match } = this.props;
        const path = `https://restcountries.eu/rest/v2/alpha/${match.params.alpha2Code}`;

        axios.get(path).then(response => {

            this.setState({
                countryDetail: response.data,
                otherCountries: response.data.altSpellings.map((res) => {
                    return res + ', '
                }),
                currency: response.data.currencies.map((res) => {
                    return Object.values(res) + ', ';
                }),
                lang: response.data.languages.map((res) => {
                    return Object.values(res) + ', ';
                }),
                bord: response.data.borders.map((res) => {
                    return res + ', ';
                }),

            });
            nameC = this.state.countryDetail.name
            this.searchGiphy(nameC)
        });

        
    
    }

    
    render() {
        localC = latLngCoord(this.state.countryDetail.latlng)
        mapProps = {
            options: {
                center: localC,
                zoom: 5,
            },
        }

        return (

            <section>
                <h1>{nameC} </h1>
                <div className="row">

                    <div className="col-md-6">
                        <img src={this.state.countryDetail.flag} className="imgFlag" alt="..." />
                    </div>
                    <div className=" col-md-6 mapDetails">
                        <Map {...mapProps} />
                    </div>
                </div>

                <div className="row">
                    <div className="countryDetail col-md-6">

                        <h5 className="bg-dark text-white countryGenInfo"> General Infos About {this.state.countryDetail.name}</h5>

                        <ul>
                            <li className="listDetailCountry"><span>Capital</span><span>:</span> <span><b>{this.state.countryDetail.capital}</b> </span></li>

                            <li className="listDetailCountry">Region       : <b>{this.state.countryDetail.region}</b></li>

                            <li className="listDetailCountry">Sub-region   : <b>{this.state.countryDetail.subregion}</b></li>

                            <li className="listDetailCountry">Borders  : <b>{this.state.bord}</b></li>

                            <li className="listDetailCountry">Calling Code : <b>{this.state.countryDetail.callingCodes}</b></li>

                            <li className="listDetailCountry">Other Name   : <b>{this.state.otherCountries}</b></li>

                            <li className="listDetailCountry">Currency     : <b>{this.state.currency}</b></li>

                            <li className="listDetailCountry">Population   : <b><NumberFormat value={this.state.countryDetail.population} displayType={'text'} thousandSeparator={true} prefix={''} /></b></li>

                            <li className="listDetailCountry">Demonym      : <b>{this.state.countryDetail.demonym}</b></li>

                            <li className="listDetailCountry">Area         : <b><NumberFormat value={this.state.countryDetail.area} displayType={'text'} thousandSeparator={true} prefix={''} /> m<sup>2</sup></b></li>

                            <li className="listDetailCountry">Languages: <b>{this.state.lang}</b></li>

                            <li className="listDetailCountry">Timezone     : <b>{this.state.countryDetail.timezones}</b></li>
                        </ul>

                    </div>

                    <hr />

                    <div className="countryDetail col-md-6">

                        <h5 className="bg-dark text-white countryGenInfo"> Animated Gifs From {nameC}</h5>

                        <ResultList results={this.state.results} />
                    </div>
                    

                </div>
                <Footer />
            </section>

        );
    }
}

function latLngCoord(arr = []) {
    let result = {}
    let lt = arr[0]
    let ln = arr[1]
    result = {
        lat: lt,
        lng: ln
    }
    return result;
}

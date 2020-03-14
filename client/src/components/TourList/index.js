import React from "react";
import "./styleTour.css";
import Axios from "axios";

export default class TourCountry extends React.Component {

  state = {

    countryData: []
  }

  componentDidMount() {

    Axios.get("https://www.triposo.com/api/20190906/location.json?part_of=Brazil&account=22YA2RQ7&token=g2r60v4hgiq3zyo304rc0p3kfkh19zd2")
      .then(res => {
        const countryData = res.data
        this.setState({ countryData })
      });

  }

  render() {

    return (
      <ul>
        {this.state.countryData.map(tour => <li>{tour.name}</li>)}
      </ul>

    )

  }
}













// function TourList(props) {
//   return (
//     <div className="tourList">
//         {props.tour.map(tour => (

//         ))}
//     </div>


//   );
// }

// export default TourList;

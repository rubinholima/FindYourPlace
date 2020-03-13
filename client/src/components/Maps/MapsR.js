import React, { useEffect, useRef } from 'react'

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef()
  const [map, setMap] = React.useState()

  useEffect(() => {
    const onLoad = () => setMap(new window.google.maps.Map(ref.current, options))
    if (!window.google) {
      const script = document.createElement(`script`)
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyASOoy7K9T8QyeA6QysbWUd5-E54b9ZmkU`
      document.head.append(script)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  }, [options])

  if (map && typeof onMount === `function`) onMount(map, onMountProps)

  return (
    <div
      style={{ height: `80%`, width: `101%`, marginLeft: `1px`, borderStyle: 'solid', borderWidth: '10px', borderRadius: `0.7em` }}
      {...{ ref, className }}
    />
  )
}

Map.defaultProps = {
  options: {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  },
}













// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '97%',
//   height: '80%',
//   marginLeft: '1px',
//   borderStyle: 'solid',
//   borderWidth: '10px'
// };
// export class MapContainer extends Component {

//   state = {
//         windowActive: true,
//         zoom:2,
//         location: {
//           lat: 0,
//           lng: 0
//        }
//       };

//   render() {
//     return (
//       <div>
        
//         <Map google={
//           this.props.google
//         }
//           zoom={
//             this.state.zoom
//           }
//           style={
//             mapStyles
//           }
//           initialCenter={
//             this.state.location
//           }
//           onChildMouseEnter={
//             this.onChildMouseEnter
//           }
//           onChildMouseLeave={
//             this.onChildMouseLeave
//           }
//         />
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyASOoy7K9T8QyeA6QysbWUd5-E54b9ZmkU'
// })(MapContainer);





// // import React, { Component } from 'react';
// // import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


// // const mapStyles = {

// //   margin: '30px',
// //   display: 'flex',
// //   alignItems: 'center'
// // };


// // export class App extends Component {

// //   state = {
// //     address: '',
// //     windowActive: true,
    
// //     location: {
// //       lat: -1.2884,
// //       lng: 36.8233
// //    }
// //   };


// //  getLocation = async () => {

// // //We get a random at and long
// //     const location = {}
// //     location.lat = ((Math.random()*90+1) - (Math.random()*90+1)) 
// //     location.lng = ((Math.random()*90+1) - (Math.random()*90+1))

// // //We create an empty var, and then use an api call to fetch the address
// //     let newAddress = ''
// //     const api_call = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key='AIzaSyASOoy7K9T8QyeA6QysbWUd5-E54b9ZmkU'`)
// //     const response = await api_call.json();
// //     console.log(response)

// // //We check to make sure there isnt in the ocean, or unmapped territory
// //     if (response.status === 'ZERO_RESULTS' ) {
// //         this.getLocation()
// //     } else {
// //       newAddress = response.results[0]
// //       this.setState({ location: location, address: newAddress })
// //     }
// // };



// // render() {

// // // ------  THE RETURN BLOCK  ------ //

// // return (
// //   <div className="App">


// // {/* HEADER */}

// //         <header className="App-header">
// //           <h1>30 days of React</h1>
// //           <h2>Day Fifteen / Let's go on HOLIDAY </h2>
// //         </header>

// // {/* COMPONENTS */}
    
// //       <button
// //         className="mainbtn" 
// //         onClick={this.getLocation}>CLICK ME
// //       </button>


// //     <div>

// // {/* Library component from google-maps-react */}
// //       <Map
// //         google={this.props.google}
// //         zoom={5}
// //         style={mapStyles}
// //         initialCenter={this.state.location}
// //         center={this.state.location}
// //       >

// // {/* Library component from google-maps-react */}       
// //        <InfoWindow
// //           visible={this.state.windowActive}
// //           position={this.state.location}
// //           >
// //             <div>
// //               <h3>You're going to {this.state.address} 🌴</h3>
// //             </div>
// //         </InfoWindow>

// //     </Map>
    
// //     </div>
        
// //    </div>
// //   );
// //  }
// // }

// // export default GoogleApiWrapper({
// //   apiKey: 'AIzaSyASOoy7K9T8QyeA6QysbWUd5-E54b9ZmkU'
// // })(App);

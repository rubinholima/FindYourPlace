import React, {
    Component
  } from 'react';
  import {
    Map,
    GoogleApiWrapper
  } from 'google-maps-react';
  
  const mapStyles = {
    width: '50%',
    height: '70%',
    marginLeft: '1px',
    borderStyle: 'solid',
    borderWidth: '10px'
  };
  
  export class MapContainer extends Component {
    render() {
      return (<
        Map google={
          this.props.google
        }
        zoom={
          2
        }
        style={
          mapStyles
        }
        initialCenter={
          {
            lat: 0,
            lng: 0
          }
        }
        onChildMouseEnter={
          this.onChildMouseEnter
        }
        onChildMouseLeave={
          this.onChildMouseLeave
        }
      />
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyASOoy7K9T8QyeA6QysbWUd5-E54b9ZmkU'
  })(MapContainer);
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={20}
          style={mapStyles}
          initialCenter={{ lat: 45.6775868, lng: -122.6706828 }}
        >
          <Marker
            position={{ lat: 45.6775868, lng: -122.6706828 }}
            text='Ems Esthetics'
          />
        </Map>
        <div>
          <h1>Contact</h1>
        </div>
      </div>
    );
  }
}

const mapStyles = {
  width: '100%',
  height: '100%'
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Contact);

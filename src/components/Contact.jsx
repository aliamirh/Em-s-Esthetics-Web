import React from 'react';
import '../App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Contact extends React.Component {
  render() {
    return (
      <div id='backgroundColor' style={divContentMargin}>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          {/* calling this Component is not letting me update the stylesheet */}
          <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{ lat: 45.6774, lng: -122.6694 }}
          >
            <Marker
              position={{ lat: 45.6774, lng: -122.6694 }}
              text='Ems Esthetics'
            />
          </Map>
        </div>
      </div>
    );
  }
}

const mapStyles = {
  width: '40%',
  height: '50%'
};
const divContentMargin = {
  marginLeft: '20%',
  marginRight: '20%'
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Contact);

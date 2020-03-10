import React from 'react';
import '../App.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Contact extends React.Component {
  render() {
    return (
      <div style={divContentMargin}>
        <div style={contactHeader}>
          <p>Em's Esthetics</p>
          <p>360.605.6447</p>
          <p>7618 NE Hazel Dell Avenue Vancouver, Washington 98665</p>
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
  width: '20%',
  height: '30%',
  marginLeft: '10%',
  marginRight: '20%'
};
const divContentMargin = {
  marginLeft: '20%',
  marginRight: '20%'
};

const contactHeader = {
  fontFamily: 'Roboto, sans-serif',
  paddingLeft: '2px',
  fontSize: '25px',
  float: 'right'
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Contact);

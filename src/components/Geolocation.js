import canUseDOM from "can-use-dom";
import raf from "raf";
import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Circle, InfoWindow } from 'react-google-maps'

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation : 
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    center={props.center}
  >
    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.20,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}
  </GoogleMap>
));


class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: null,
      content: null,
      radius: 6000,
      isUnmounted: false,
    };
  }

  componentDidMount() {
    const tick = () => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    geolocation.getCurrentPosition((position) => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Location found.`,
      });

      raf(tick);
    }, (reason) => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: 60,
          lng: 105,
        },
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.state.isUnmounted = true;
  }

  render() {
    return (
      <GeolocationExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={this.state.center}
        content={this.state.content}
        radius={this.state.radius}
      />
    );
  }
}

export default Geolocation;
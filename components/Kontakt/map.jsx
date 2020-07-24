import React, {useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, withScriptjs,withGoogleMap, } from '@react-google-maps/api';
import styles from './map.styles.json';
import mapMarker from "../../public/img/map-marker-icon.png";

const center = {
  lat: 46.748342,
  lng: 7.439985
};
const centerForSmallDevice = {
  lat: 46.948342,
  lng: 7.439985
};

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = () => {

  const [map, setMap] = React.useState(null)
  const [smallDevice, setSmallDevice] = useState();

  useEffect(() => {
    const xs = window.matchMedia(' (max-width: 768px)').matches;
    setSmallDevice(xs)
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyBphDIApy9Uibed6FOEJlSDi0oxQh726s8">
      <GoogleMap
        mapContainerStyle={containerStyle }
        center={smallDevice ? centerForSmallDevice : center}
        zoom={10}
        scrollwheel={false}
        options={{
            styles: styles,
            gestureHandling: 'greedy'
        }}
      >
        <Marker
          icon={mapMarker}
          position={{
            lat: 46.948342, // latitude to position the marker
            lng: 7.439985 // longitude to position the marker
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
}

 Map.defaultProps = {
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander
  mapStyles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
}

export default Map
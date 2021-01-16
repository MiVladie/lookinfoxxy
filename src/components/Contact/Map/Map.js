import React from 'react';

import { GOOGLE_MAPS_API_KEY } from '../../../config/constants';

import GoogleMap from './google_maps/googleMaps';

const Map = ({ location, zoom }) => (
    <GoogleMap 
        location = { location }
        zoom = { zoom }
        googleMapURL = { "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAPS_API_KEY }
        loadingElement = { <div style = {{ height: `100vh`, width: '100vw' }} /> }
    />
);

export default Map;

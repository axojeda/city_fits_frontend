import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapPopUp = () => {

return (
    <Marker position={[40.705329, -74.013969]}>
        <Popup>
        flatiron school
        </Popup>
    </Marker>
    )
}
export default MapPopUp
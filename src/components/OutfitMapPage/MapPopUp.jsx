import React, { useState } from 'react';
import { Marker, Popup} from "react-leaflet";


function MapPopUp() {

  return (
    <Marker position={[40.705329, -74.013969]} >
        <Popup>
        SEB IS A B
        </Popup>
    </Marker>
  )
}
export default MapPopUp
import './OutfitMap.scss'
import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapPopUp from './MapPopUp.jsx';

// center = center of the map
const center = [40.705329, -74.013969]   

const OutfitMap = () => {

    // state to set outfits
    const [outfits, setOutfits] = useState([])

    useEffect(() => {
        const fetchOutfits = async () => {
            let res = await fetch("http://localhost:3000/outfits")
            let outfits = await res.json();
            setOutfits(outfits);
        };
        fetchOutfits();
    }, [])

    const renderOutfitList = outfits.map((outfit) => {
        return (
            <div classname='outfit'>
                <ul>{outfit.name}</ul>
            </div>
        )
    })

    return (
        <div className='map'>
            <h2 id="findoutfit">Find your OutFit:</h2>
            <MapContainer center={center} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapPopUp/>
            </MapContainer>

        </div>
    )
}

export default OutfitMap
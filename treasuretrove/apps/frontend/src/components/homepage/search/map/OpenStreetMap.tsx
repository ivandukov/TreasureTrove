import "leaflet/dist/leaflet.css";
import { SetStateAction, useState } from "react";
import { LatLng, Marker, Popup, TileLayer } from "leaflet";
/*
function LocationMarker() {
    const [position, setPosition] = useState<LatLng | null>(null);
    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e: { latlng: SetStateAction<LatLng | null>; }) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}
*/

export default function OpenStreetMap() {
    return (
        <></>
        /*
        <MapContainer
            center={{ lat: 51.505, lng: -0.09 }}
            zoom={13}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
        </MapContainer>
        */
    );
}
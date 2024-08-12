import { Marker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Stack, VStack } from "@chakra-ui/react";

export default function OpenStreetMap() {

    return (
        <>   
            <Box h={72} w={"100%"}>
                <MapContainer 
                    center={[52.02, 8.54]}
                    zoom={17} 
                    scrollWheelZoom={true}
                    style={{ height: "300px"}} 
                > 
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[52.02, 8.54]}>
                    </Marker>
                </MapContainer>
            </Box>
        </>
    );
}
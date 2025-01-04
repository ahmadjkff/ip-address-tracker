import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { MyContext } from "./Context";

// Custom hook to update map view
const UpdateMapCenter = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);

  return null;
};

const MyMap = () => {
  const { center } = useContext(MyContext);

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100vh", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          Location: {center[0]}, {center[1]}
        </Popup>
      </Marker>
      <UpdateMapCenter center={center} />
    </MapContainer>
  );
};

export default MyMap;

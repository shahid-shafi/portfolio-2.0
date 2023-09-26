import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './index.scss';
import { LatLngExpression } from 'leaflet';
const MapSection = () => {
  const center = [33.975608, 74.901473] as LatLngExpression;

  return (
    <div className="flex-basis">
      <MapContainer center={center} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>Shahid lives here, come over for a cup of coffee :)</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;

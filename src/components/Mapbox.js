import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

//css
import '../App.css';
const position = [28.7041, 77.1025];

export default function Mapbox({ currentPos, setCurrentPos }) {
  function MyComponent() {
    useMapEvents({
      click: (e) => {
        const latlang = e.latlng;
        setCurrentPos([latlang.lat, latlang.lng]);
      },
    });
    return null;
  }

  return (
    <div>
      <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentPos && (
          <Marker position={currentPos} draggable={true}>
            <Popup>
              Current location: <pre>{JSON.stringify(currentPos, null, 2)}</pre>
            </Popup>
          </Marker>
        )}
        <MyComponent />
      </MapContainer>
    </div>
  );
}

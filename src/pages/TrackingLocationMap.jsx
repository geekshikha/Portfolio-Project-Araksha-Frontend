import { React, useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";

const { BaseLayer } = LayersControl;

const markerIcon = new L.Icon({
  iconUrl: require("../resources/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

export default function Map(props) {
  const { latitude, longitude } = props;
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ latitude, longitude });

  useEffect(() => {
    if (!map) return;

    L.easyButton("fa-map-marker", () => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }).addTo(map);
  }, [map]);

  return (
    <MapContainer
      center={[52.38826077323548, 4.824020920666874]}
      zoom={20}
      style={{ height: "70vh" }}
      whenCreated={setMap}
    >
      <LayersControl>
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
          />
        </BaseLayer>
      </LayersControl>
      <Marker position={[latitude, longitude]} icon={markerIcon}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
}

// icon={markerIcon} key={idx}

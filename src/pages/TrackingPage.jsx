import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button, Title } from "../styled";
import TrackingForm from "../components/Forms/TrackingForm";
// import TrackingMap from "./TrackingMap.jsx";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FiMapPin } from "react-icons/fi";
import TrackingLocationMap from "./TrackingLocationMap.jsx";

const TrackingPage = () => {
  const [time, setTime] = useState("fetching");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [editMode, setEditMode] = useState(false);

  //   useEffect(() => {
  //     const socket = io.connect("http://localhost:4000");
  //     console.log(socket, "connected?");
  //     socket.on("connect", () => console.log(socket.id));
  //     socket.on(
  //       "connect_error",
  //       () => {
  //         setTimeout(() => socket.connect(), 5000);
  //       },
  //       []
  //     );
  //     socket.on("ping", (data) => {
  //       console.log("new message from socket", data.message);
  //     });
  //     socket.on(
  //       "location",
  //       (lat, long) => {
  //         console.log("what is lat?", lat, long);
  //         setLocation(lat, long);
  //       }
  //       // socket.on("track-location, (data)")
  //       // console.log(data)
  //       // /test-socket
  //     );
  //     socket.on("test-message", (data) => {
  //       console.log("did we get this data from emit?", data);
  //     });
  //     socket.on("time", (data) => setTime(data));
  //     socket.on("disconnect", () => setTime("server disconnected"));
  //   }, []);

  useEffect(() => {
    const socket = io.connect("http://localhost:4000");
    console.log(socket, "connected?");

    socket.on("send-location", (arg1, arg2) => {
      console.log("getting connected", arg1, arg2);
      setLatitude(arg1);
      setLongitude(arg2);
    });

    socket.on("time", (data) => setTime(data));
  }, []);

  return (
    <div style={{ textAlign: "center", height: "70vh", marginTop: "30px" }}>
      <Title>Find Your Loved Ones ❤️</Title>
      <TrackingForm />
      <Button
        style={{ marginRight: 50 }}
        onClick={() => setEditMode(!editMode)}
      >
        <FiMapPin /> Find
      </Button>
      {editMode && (
        <div>
          <div>The current time: {time}</div>
          <div>
            The current location: latitude {latitude} - longitude {longitude}
          </div>
          <div>
            {/* <TrackingMap latitude={latitude} longitide={longitude} /> */}
            <TrackingLocationMap latitude={latitude} longitude={longitude} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;

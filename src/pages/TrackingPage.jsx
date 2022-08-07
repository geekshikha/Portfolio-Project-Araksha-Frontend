import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button, Title } from "../styled";
import TrackingForm from "../components/Forms/TrackingForm";

import { FiMapPin } from "react-icons/fi";
import TrackingLocationMap from "./TrackingLocationMap.jsx";

const TrackingPage = () => {
  const [time, setTime] = useState("fetching");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // const socket = io.connect("http://localhost:4000");
    const socket = io.connect("https://araksha.herokuapp.com");
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
      <Title>Find My Stuff 🔍</Title>
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
            <TrackingLocationMap latitude={latitude} longitude={longitude} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;

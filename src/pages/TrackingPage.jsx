import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { Button } from "../styled";
import TrackingForm from "../components/Forms/TrackingForm";

const TrackingPage = () => {
  const [time, setTime] = useState("fetching");
  const [location, setLocation] = useState(0);
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
    });
  });

  return (
    <div>
      <h3> TrackingPage</h3>
      <TrackingForm />
      <Button
        style={{ marginRight: 50 }}
        onClick={() => setEditMode(!editMode)}
      >
        Start Tracking
      </Button>
      {editMode && (
        <div>
          <div>This is time {time}</div>
          <div>This is location {location}</div>
        </div>
      )}
    </div>
  );
};

export default TrackingPage;

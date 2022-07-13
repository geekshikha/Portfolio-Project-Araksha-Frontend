import React, { useState } from "react";

const TrackingForm = () => {
  const [serialNumber, setSerialNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="serialNumber">Serial Number</label>
      <input
        type="text"
        id="serialNumber"
        placeholder="Enter serial number of device"
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
        required
      />
    </form>
  );
};

export default TrackingForm;

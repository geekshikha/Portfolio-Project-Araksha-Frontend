import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import styled from "styled-components";

const TrackingForm = () => {
  const [serialNumber, setSerialNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <FormControl className="form" onSubmit={handleFormSubmit}>
        <InputLabel htmlFor="component-outlined">
          Enter Serial Number
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
          required
          label="SerialNumber"
        />
      </FormControl>
    </Container>
  );
};

export default TrackingForm;

const Container = styled.div`
  text-align: center;
`;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = useState(2);

  return (
    <Box style={{ margin: "40px", padding: "40px" }}>
      <Typography component="legend" style={{ margin: "14px" }}>
        {" "}
        Reviews
      </Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}

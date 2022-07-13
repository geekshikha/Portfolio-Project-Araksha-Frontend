import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = useState(2);

  return (
    <Box>
      <Typography component="legend">Reviews</Typography>
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

// <Typography component="legend">Read only</Typography>
// <Rating name="read-only" value={value} readOnly />
// <Typography component="legend">Disabled</Typography>
// <Rating name="disabled" value={value} disabled />
// <Typography component="legend">No rating given</Typography>
// <Rating name="no-value" value={null} />

// sx={{
//     "& > legend": { mt: 2 },
//   }}

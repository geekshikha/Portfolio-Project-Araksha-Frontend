import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ratings: [],
};

export const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    starRating: (state, action) => {
      state.ratings = [...action.payload];
    },
  },
});

export const { starRating } = ratingSlice.actions;

export default ratingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: [],
  deviceDetails: null,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    deviceList: (state, action) => {
      state.devices = [...action.payload];
    },
    deviceDetails: (state, action) => {
      state.deviceDetails = { ...action.payload };
    },
  },
});

export const { deviceList, deviceDetails } = deviceSlice.actions;

export default deviceSlice.reducer;

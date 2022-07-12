import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devices: [],
  categoriesWithDevices: [],
  deviceDetails: null,
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    deviceList: (state, action) => {
      state.devices = [...action.payload];
    },

    allDevices: (state, action) => {
      state.categoriesWithDevices = [...action.payload];
    },

    deviceDetails: (state, action) => {
      state.deviceDetails = { ...action.payload };
    },
  },
});

export const { deviceList, allDevices, deviceDetails } = deviceSlice.actions;

export default deviceSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: localStorage.getItem("shippingAddress"),
  payment: "",
  order: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    shippingAddress: (state, action) => {
      localStorage.setItem("shippingAddress", action.payload.shippingAddress);

      state.shippingAddress = action.payload;
    },

    payments: (state, action) => {
      state.payment = action.payload;
    },

    userOrderDetails: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { shippingAddress, payments, userOrderDetails } =
  orderSlice.actions;

export default orderSlice.reducer;

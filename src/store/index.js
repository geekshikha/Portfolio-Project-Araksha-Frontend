import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import deviceSlice from "./device/slice";
import cartSlice from "./cart/slice";
import orderSlice from "./orders/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    device: deviceSlice,
    cart: cartSlice,
    orders: orderSlice,
  },
});

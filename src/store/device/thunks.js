import axios from "axios";
import { apiUrl } from "../../config/constants";

import { deviceList } from "./slice";
// import { appLoading, appDoneLoading } from "../appState/slice";

export const fetchDeviceThunk = () => async (dispatch, getState) => {
  //   dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/category`);

    console.log("response", response);

    const devices = response.data.categories;
    dispatch(deviceList(devices));
    // dispatch(appDoneLoading());
  } catch (e) {
    // dispatch(appDoneLoading());
    console.log(e.message);
  }
};

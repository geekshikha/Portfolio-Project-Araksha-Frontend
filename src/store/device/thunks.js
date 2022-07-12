import axios from "axios";
import { apiUrl } from "../../config/constants";

import { deviceList, allDevices, deviceDetails } from "./slice";
// import { appLoading, appDoneLoading } from "../appState/slice";

export const fetchCategoriesThunk = () => async (dispatch, getState) => {
  //   dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/category`);

    // console.log("response", response);

    const devices = response.data.categories;
    dispatch(deviceList(devices));
    // dispatch(appDoneLoading());
  } catch (e) {
    // dispatch(appDoneLoading());
    console.log(e.message);
  }
};

export const fetchCategoriesByIdThunk = (id) => async (dispatch, getState) => {
  //   dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/category/${id}`);

    // console.log("responsewithId", response);

    const category = response.data.categories.devices;
    dispatch(allDevices(category));
    // dispatch(appDoneLoading());
  } catch (e) {
    // dispatch(appDoneLoading());
    console.log(e.message);
  }
};

export const fetchdeviceDetailsByIdThunk =
  (id) => async (dispatch, getState) => {
    //   dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/category/device/${id}`);

      const device = response.data.device;

      dispatch(deviceDetails(device));
      // dispatch(appDoneLoading());
    } catch (e) {
      // dispatch(appDoneLoading());
      console.log(e.message);
    }
  };

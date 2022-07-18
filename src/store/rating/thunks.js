import axios from "axios";
import { apiUrl } from "../../config/constants";

import { starRating } from "./slice";

export const fetchStarRatingThunk = () => async (dispatch, getState) => {
  //   dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/rating`);

    console.log("response", response);

    const ratings = response.data.ratings;
    dispatch(starRating(ratings));
    // dispatch(appDoneLoading());
  } catch (e) {
    // dispatch(appDoneLoading());
    console.log(e.message);
  }
};

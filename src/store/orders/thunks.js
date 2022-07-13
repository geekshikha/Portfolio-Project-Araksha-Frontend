import axios from "axios";
import { apiUrl } from "../../config/constants";
import { emptyCart } from "../cart/slice";
import { userSelector } from "../user/selectors";
import { userOrderDetails } from "./slice";

export const orderData = (total, shippingAddress, paymentMethod, items) => {
  return async (dispatch, getState) => {
    //   dispatch(appLoading());
    console.log("order", total, shippingAddress, paymentMethod, items);
    const user = userSelector(getState());
    console.log("user", user);
    try {
      const response = await axios.post(
        `${apiUrl}/orders`,
        {
          total,
          shippingAddress,
          paymentMethod,
          items,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      console.log("uresponse from the back", response);
      dispatch(userOrderDetails(response.data.order));

      dispatch(emptyCart());
      //localStorage.removeItem("cartItems")
      //   dispatch(showMessageWithTimeout("success", true, "order created"));
      //   dispatch(appDoneLoading());
    } catch (error) {
      console.log("this is error", error);
      //   if (error.response) {
      //     // dispatch(setMessage("danger", true, error.response.data.message));
      //   } else {
      //     console.log(error.message);
      //     // dispatch(setMessage("danger", true, error.message));
      //   }
      //   dispatch(appDoneLoading());
    }
  };
};

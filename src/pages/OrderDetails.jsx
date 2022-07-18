import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { config } from "../config";
import { orderCreateSelector } from "../store/orders/selectors";
import { showMessageWithTimeout } from "../store/appState/thunks";
import styled from "styled-components";

const OrderDetails = () => {
  const order = useSelector(orderCreateSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  console.log("config", config.paypalClient);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "orders",
            amount: {
              currency_code: "EUR",
              value: `${order.total}`,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log("payer is:", payer);
      setSuccess(true);

      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          ` Thank you for your purchase!, Your paypent ref. is: ${order.id}`,
          5000
        )
      );
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  console.log("onError", onError);

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      //history.push("/");
      navigate("/");
    }
  }, [success, navigate]);

  console.log(1, orderID);
  console.log(2, success);
  console.log(3, ErrorMessage);

  return (
    <Container>
      <div className="grid-container">
        <div className="orders">
          <h1>Order Id: {order.id}</h1>
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  {order.shippingAddress} <br />
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="summary">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row ">
                  <h3>Total:</h3>
                  <p>{order.total}€</p>
                </div>
              </li>
              {order.id ? (
                <PayPalScriptProvider
                  options={{
                    "client-id": config.paypalClient,
                    currency: "EUR",
                  }}
                >
                  <PayPalButtons
                    style={{
                      layout: "horizontal",
                      shape: "pill",
                      label: "pay",
                      tagline: "false",
                      height: 50,
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrderDetails;

const Container = styled.div`
  text-align: center;
  // border: 0.1rem #0077b6 solid;
  background-color: #e8f9fd;
  border-radius: 0.5rem;
  margin: 1.5rem 9rem;
  padding: 2rem;
  // .card {
  //   border: 0.1rem #0077b6 solid;
  //   background-color: #caf0f8;
  //   border-radius: 0.5rem;
  //   margin: 1.5rem 6rem;
  // }
  ul {
    list-style-type: none;
  }
`;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../Checkout/CheckoutSteps";
import { payments } from "../../store/orders/slice";
import { shippingAddressSelector } from "../../store/orders/selectors";
import FakePaymentLayout from "./FakePaymentLayout";
import styled from "styled-components";
import { Button } from "../../styled/Button";
import { FcCurrencyExchange } from "react-icons/fc";

const Payment = () => {
  const [payment, setPaymentMethod] = useState("PayPal");
  const shippingAddress = useSelector(shippingAddressSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("pament", payment);
    dispatch(payments(payment));
    navigate("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <Form className="payment form" onSubmit={submitHandler}>
        <div>
          {" "}
          <h3>Select your payment method</h3>
        </div>
        <div>
          <div>
            {" "}
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            />{" "}
            <img src="./images/paypal.png" alt="" width="25px" />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src="./images/stripe.png" alt="" width="25px" />
            <label htmlFor="stripe">Stripe</label>
          </div>
          <div>
            <Button style={{ width: "30%" }}>
              {" "}
              <FcCurrencyExchange /> Continue
            </Button>
          </div>

          <FakePaymentLayout />
        </div>
      </Form>
    </div>
  );
};

export default Payment;

const Form = styled.form`
  text-align: center;
  border: 0.1px outset #dcdcdc;
  margin: 45px 330px;
  //   background: #eedd82;

  &.payment > div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }
  &.payment label {
    margin: 1rem 0;
  }
`;

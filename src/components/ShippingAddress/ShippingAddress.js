import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { shippingAddress } from "../../store/orders/slice";
import { selectToken } from "../../store/user/selectors";
import CheckoutSteps from "../Checkout/CheckoutSteps";
import styled from "styled-components";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingAddressSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("shipping address", fullName, address, city, postalCode);
    dispatch(shippingAddress({ fullName, address, city, postalCode }));
    navigate("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <Form className="form" onSubmit={shippingAddressSubmitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>

        <div>
          <label />
          <button>Continue</button>
        </div>
      </Form>
    </div>
  );
};

export default ShippingAddress;

const Form = styled.form`
  position: relative;
  z-index: 1;
  max-width: 350px;
  margin: 0 auto 100px;
  padding: 45px;
  background: #ffffff;


  .form {
    input {
      @include input;
  
      ::placeholder {
        color: #90a4ae;
      }
    }
  
    .btn {
      @include btn;
    }
  
`;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styled";

import { shippingAddress } from "../../store/orders/slice";
import { selectToken } from "../../store/user/selectors";
import CheckoutSteps from "../Checkout/CheckoutSteps";
import styled from "styled-components";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

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
      <Container>
        <FormControl className="form">
          <InputLabel htmlFor="component-outlined">FullName</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            label="FullName"
          />
        </FormControl>
        <FormControl className="form">
          <InputLabel htmlFor="component-outlined">Address</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            label="Address"
          />
        </FormControl>
        <FormControl className="form">
          <InputLabel htmlFor="component-outlined">City</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            label="City"
          />
        </FormControl>
        <FormControl className="form">
          <InputLabel htmlFor="component-outlined">PostalCode</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            label="PostalCode"
          />
        </FormControl>

        <div style={{ textAlign: "center" }}>
          <Button onClick={shippingAddressSubmitHandler}>
            {" "}
            <Fab color="primary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ShippingAddress;

const Container = styled.div`
  // position: relative;
  z-index: 1;
  max-width: 750px;
  margin: 0 auto 100px;

  padding: 45px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form {
    margin: 10px;
  }

  // .form {
  //   display: flex;
  //   flex-direction: column;
  //   width:  60%;
  //   justify-content: center;
  // margin: 20 120;
  // input {
  //   @include input;

  //   ::placeholder {
  //     color: #90a4ae;
  //   }
  // }

  // .btn {
  //   @include btn;
  // }
`;

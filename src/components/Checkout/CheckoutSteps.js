import React from "react";
import styled from "styled-components";

const CheckoutSteps = (props) => {
  return (
    <Container>
      <div className={props.step1 ? "active" : ""}>Sign-In</div>
      <div className={props.step2 ? "active" : ""}>Shipping</div>
      <div className={props.step3 ? "active" : ""}>Payment</div>
      <div className={props.step4 ? "active" : ""}>Place Order</div>
    </Container>
  );
};

export default CheckoutSteps;

const Container = styled.div`
  border-top: 0.3rem #c0c0c0 solid;
  color: #c0c0c0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;

  &.checkout-steps > div.active {
    color: #f08000;
    border-top-color: orange;
  }
`;

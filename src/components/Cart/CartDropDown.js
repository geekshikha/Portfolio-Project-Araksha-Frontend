import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemSelector } from "../../store/cart/selectors";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartDropDown = (props) => {
  const cartItems = useSelector(cartItemSelector);
  const navigate = useNavigate();

  function navigateToCheckout() {
    navigate("/checkout");
    props.onCartClose();
  }

  return (
    <Container>
      <div className="cart-items">
        <CartItem />
      </div>
      {cartItems.length ? (
        <button onClick={navigateToCheckout}>GO TO CHECKOUT</button>
      ) : null}
    </Container>
  );
};

export default CartDropDown;

const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid blue;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  button {
    margin: 50px 0 0 35px;
  }
`;

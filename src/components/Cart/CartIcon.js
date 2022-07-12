import React from "react";
import { useSelector } from "react-redux";
import { cartItemSelector } from "../../store/cart/selectors";
import { BsCart } from "react-icons/bs";

import styled from "styled-components";

const CartIcon = () => {
  const cartItems = useSelector(cartItemSelector);

  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity,
    0
  );

  return (
    <Container>
      <BsCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </Container>
  );
};

export default CartIcon;

const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;

  .shopping-icon {
    width: 24px;
    height: 44px;
  }

  .item-count {
    position: absolute;
    font-size: 15px;
    // font-weight: bold;
    // bottom: 12px;
    right: -0.95px;
    top: -1.9px;
    // display: block;
    // background: red;
    // border-radius: 50%;
    color: #fff;
    // padding: 20px;
    // margin: 20px;
    // color: #ffd700;
  }
`;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CheckoutItem from "../components/Checkout/CheckoutItem";
import { cartItemSelector } from "../store/cart/selectors";
import { Button } from "../styled/Button";

const CheckoutPage = () => {
  const cartItems = useSelector(cartItemSelector);

  console.log("cartItems", cartItems);

  const calculateTotal = (arrayItems) => {
    return arrayItems.reduce(
      (accumulatedQuantity, cartItems) =>
        accumulatedQuantity + cartItems.quantity * cartItems.price,
      0
    );
  };
  const totalPrice = calculateTotal(cartItems);

  return (
    <Container>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">TOTAL: €{totalPrice}</div>
      {cartItems.length ? (
        <Link to="/shipping">
          <Button>Proceed to Checkout</Button>
        </Link>
      ) : (
        <div>
          <p> No items in your Cart 🥺</p>
          <Link to="/products">
            <h2> Go shopping 🛍</h2>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CheckoutPage;

const Container = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    //   background-color: #a4c4eb;
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`;

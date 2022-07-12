import React from "react";
import { useSelector } from "react-redux";
import { cartItemSelector } from "../../store/cart/selectors";
import styled from "styled-components";

const CartItem = () => {
  const items = useSelector(cartItemSelector);
  return (
    <Container>
      {items.length ? (
        items.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="item" />
              <div className="item-details">
                <span className="title">{item.title}</span>
                <span className="price">
                  {item.quantity} * {item.price}€
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </Container>
  );
};

export default CartItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 10px 20px;

    .title {
      font-size: 16px;
    }
  }
`;

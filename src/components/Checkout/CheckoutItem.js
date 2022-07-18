import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../../store/cart/slice";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

const CheckoutItem = ({ item }) => {
  const { title, price, quantity, image } = item;

  console.log("item", item);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div className="sign" onClick={() => dispatch(removeItem(item))}>
          -
        </div>
        <span className="value">{quantity}</span>
        <div className="sign" onClick={() => dispatch(addItem(item))}>
          +
        </div>
      </span>
      <span className="price">€{price}</span>
      <div className="remove-button" onClick={() => dispatch(clearItem(item))}>
        <MdDeleteForever style={{ fontSize: "25px" }} />
      </div>
    </Container>
  );
};

// &#10005;
export default CheckoutItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .sign {
      cursor: pointer;
    }
    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;

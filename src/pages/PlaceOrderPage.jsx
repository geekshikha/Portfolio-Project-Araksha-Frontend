import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartItemSelector } from "../store/cart/selectors";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import {
  shippingAddressSelector,
  paymentTypeSelector,
  orderCreateSelector,
} from "../store/orders/selectors";
import { orderData } from "../store/orders/thunks";
import styled from "styled-components";
import { Button } from "../styled";

const PlaceOrderPage = () => {
  const navigate = useNavigate();
  const paymentMethod = useSelector(paymentTypeSelector);
  if (!paymentMethod) {
    navigate("/payment");
  }

  const order = useSelector(orderCreateSelector);
  console.log("orderId", order.id);
  const shipping = useSelector(shippingAddressSelector);
  const items = useSelector(cartItemSelector);
  console.log("The shipping address", shipping);

  useEffect(() => {
    if (order.id !== undefined) {
      navigate(`/order/${order.id}`);
    }
  }, [order.id, navigate]);

  const totalPrice = items.reduce(
    (accumulatedQuantity, cartItems) =>
      accumulatedQuantity + cartItems.quantity * cartItems.price,
    0
  );

  const dispatch = useDispatch();

  function placeOrderHandler() {
    console.log("in function");
    dispatch(orderData(totalPrice, shipping, paymentMethod, items));
  }

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Section className="grid-container">
        <div className="orders">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>
                  {shipping.fullName} <br />
                  <strong>Address: </strong>
                  <li>{shipping.address},</li>{" "}
                  <li>
                    <strong>City: </strong>
                    {shipping.city},
                  </li>
                  <li>
                    <strong>PostalCode:</strong> {shipping.postalCode}
                  </li>
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method: </strong>
                  {paymentMethod}
                  <br />
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {items.map((item) => {
                    //console.log("each item", item);
                    return (
                      <li key={item.id}>
                        <div className="row">
                          <div>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="small"
                            />
                          </div>
                          <div className="min-30">{item.title}</div>
                          <div>
                            {item.quantity} x {item.price} =
                            {item.quantity * item.price}€
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
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
                  <p>{totalPrice}€</p>
                </div>
              </li>
              <Button
                type="button"
                onClick={placeOrderHandler}
                disabled={items.length === 0}
              >
                Place Order
              </Button>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PlaceOrderPage;

const Section = styled.div`
  display: flex;
  .card {
    border: 0.1rem #0077b6 solid;
    background-color: #caf0f8;
    border-radius: 0.5rem;
    margin: 1.5rem 6rem;
  }
  .card-body {
    padding: 2rem;
  }
  .card-body > * {
    margin-bottom: 0.5rem;
  }

  .row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img.small {
    max-width: 4rem;
    width: 100%;
  }

  ul {
    list-style-type: none;
  }

  .summary {
    & button {
      width: 50%;
      padding: 0.5rem;
      background-color: #161ade;
      color: white;
      border-radius: 1rem;
      text-decoration: none;
      font-size: 1rem;
    }
    .card {
      width: 30rem;
    }
  }
`;

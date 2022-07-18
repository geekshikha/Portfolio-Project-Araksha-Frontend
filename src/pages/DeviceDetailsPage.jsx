import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchdeviceDetailsByIdThunk } from "../store/device/thunks";
import { deviceDetailSelector } from "../store/device/selectors";
import { addItem } from "../store/cart/slice";
import CommentsForm from "../components/Comments/CommentsForm";

const DeviceDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [deviceDetails, setDeviceDetails] = useState({});

  useEffect(() => {
    dispatch(fetchdeviceDetailsByIdThunk(id));
  }, [dispatch, id]);
  const details = useSelector(deviceDetailSelector);

  useEffect(() => {
    setDeviceDetails(details);
  }, [details]);

  console.log("items", deviceDetails);

  const onClickCartItemHandle = () => {
    const { id, title, price, image } = deviceDetails;
    dispatch(addItem({ id, title, price, image }));
  };

  return (
    <Section>
      {deviceDetails ? (
        <Container>
          <div className="container">
            <div className="images">
              <img src={deviceDetails.image} alt="" />
            </div>
            <div className="product">
              <h1>{deviceDetails.title}</h1>
              <h2>€{deviceDetails.price}</h2>
              <p className="desc">{deviceDetails.description}</p>
              <div className="buttons">
                <button className="add" onClick={onClickCartItemHandle}>
                  Add to Cart
                </button>
                <button className="like">
                  <span>♥</span>
                </button>
              </div>
            </div>
            <p className="pick">choose size</p>
            <div className="sizes">
              <div className="size">XS</div>
              <div className="size">S</div>
              <div className="size">M</div>
              <div className="size">L</div>
              <div className="size">XL</div>
            </div>
            <div style={{ marginLeft: "540px", letterSpacing: ".4em" }}>
              ⭐⭐⭐⭐☆
            </div>
          </div>{" "}
        </Container>
      ) : (
        <div>Loading</div>
      )}

      <CommentsForm />
    </Section>
  );
};

export default DeviceDetailsPage;

const Section = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  display: grid;
  background: white;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  margin: 43px;

  .container {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 720px;
    height: 550px;
    background: #f5f5f5;
    box-shadow: 5px 5px 15px rgba(#ba7e7e, 0.5);
    border-radius: 10px;
  }

  p {
    font-size: 0.6em;
    color: #ba7e7e;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 1.2em;
    color: #4e4e4e;
    margin-top: -5px;
  }

  h2 {
    color: #c3a1a0;
    margin-top: -5px;
  }

  img {
    width: 40%;

    margin-top: 7px;
  }

  .product {
    position: absolute;
    width: 40%;
    height: 100%;
    top: 10%;
    left: 60%;
  }

  .desc {
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 17px;
    color: #4e4e4e;
    font-size: 0.7em;
    line-height: 1.6em;
    margin-right: 25px;
    text-align: justify;
  }

  button {
    background: darken(#1c35d9, 40%);
    padding: 10px;
    display: inline-block;
    outline: 0;
    border: 0;
    margin: -1px;
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #1c35d9;
    cursor: pointer;
    &:hover {
      background: #e0c9cb;
      transition: all 0.4s ease-in-out;
    }
  }

  .add {
    width: 67%;
  }

  .like {
    width: 22%;
  }

  .sizes {
    display: grid;
    color: #d9aab7;
    grid-template-columns: repeat(auto-fill, 30px);
    width: 60%;
    grid-gap: 4px;
    margin-left: 20px;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  .pick {
    margin-top: 11px;
    margin-bottom: 0;
    margin-left: 20px;
  }

  .size {
    padding: 9px;
    border: 1px solid #e0c9cb;
    font-size: 0.7em;
    text-align: center;
    &:hover {
      background: #ba7e7e;
      color: #f5f5f5;
      transition: all 0.4s ease-in-out;
    }
  }

  .focus {
    background: #ba7e7e;
    color: #f5f5f5;
  }
`;

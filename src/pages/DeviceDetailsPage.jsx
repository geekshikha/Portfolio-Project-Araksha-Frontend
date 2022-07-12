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
    <Container>
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
          </div>{" "}
        </Container>
      ) : (
        <div>Loading</div>
      )}
      <CommentsForm />
    </Container>
  );
};

export default DeviceDetailsPage;

// <div class="container">
//       <div class="images">
//         <img src={deviceDetails.image} alt="" />
//       </div>
//       <div class="slideshow-buttons">
//         <div class="one"></div>
//         <div class="two"></div>
//         <div class="three"></div>
//         <div class="four"></div>
//       </div>
//       <p class="pick">choose size</p>
//       <div class="sizes">
//         <div class="size">5</div>
//         <div class="size">6</div>
//         <div class="size">7</div>
//         <div class="size">8</div>
//         <div class="size">9</div>
//         <div class="size">10</div>
//         <div class="size">11</div>
//         <div class="size">12</div>
//       </div>
//       <div class="product">
//         <p>Women's Running Shoe</p>
//         <h1>Nike Epic React Flyknit</h1>
//         <h2>$150</h2>
//         <p class="desc">
//           The Nike Epic React Flyknit foam cushioning is responsive yet
//           #E0C9CB-weight, durable yet soft. This creates a sensation that not only
//           enhances the feeling of moving forward, but makes running feel fun,
//           too.
//         </p>
//         <div class="buttons">
//           <button class="add">Add to Cart</button>
//           <button class="like">
//             <span>♥</span>
//           </button>
//         </div>
//       </div>
//     </div>

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
    width: 390px;

    margin-top: 47px;
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
`;

import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const DeviceCard = (props) => {
  const { id, title, price, imageUrl, description } = props;

  return (
    <Container className="wrapper">
      <div className="card" key={id}>
        <img src={imageUrl} className="card__img" alt="" />
        <div className="card_body">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <h3 className="card__price">{price}</h3>

          <Link to={`/devices/${id}`}>
            <button className="card__btn">View Details</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DeviceCard;

const Container = styled.div`
  color: #4f546c;
  .wrapper {
    margin: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: center;
  }

  .card {
    box-shadow: 0 0 10px 5px #e1e5ee;
    border-radius: 0.2rem;
    margin: 30px;
    min-width: 28rem;
    display: flex;

    &__img {
      width: 14rem;
      height: 11rem;
      object-fit: cover;
    }

    &__body {
      margin: 1rem;
      flex-grow: 1;
    }
    &__title {
      line-height: 1.4rem;
      margin-bottom: 0.5rem;
    }
    &__description {
      line-height: 1.2rem;
    }
    &__price {
      font-size: 1.4rem;
      margin-top: 0.6rem;

      &::before {
        content: "€";
        font-size: 1rem;
        position: relative;
        top: -0.3rem;
        padding-right: 0.1rem;
      }
    }

    &__btn {
      border: none;
      border-top: 1px solid #e1e5ee;
      background-color: transparent;
      font-family: inherit;
      font-size: 1rem;
      font-weight: bold;
      color: inherit;
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-top: 1rem;
      cursor: pointer;

      &:hover {
        color: #0e48fe;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .wrapper {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
    }

    .card {
      flex-direction: column;
      text-align: center;
      min-width: 14rem;

      &__img {
        width: 100%;
        height: 12rem;
      }
    }
  }
`;

//  <div
// className="img"
// style={{
//   backgroundImage: `url(${imageUrl})`,
// }}
// >
// <div className="product-footer">
// <span className="name">{title}</span>
// <span className="price">{price}</span>
// </div>
// <CustomButton
// onClick={() => dispatch(addItem({ id, title, price, imageUrl }))}
// >
// Add to cart
// </CustomButton>*/}

// <div className="card">
//       <img src={props.img} className="card__img" />
//       <div className="card__body">
//         <h2 className="card__title">{props.title}</h2>
//         <p className="card__description">{props.description}</p>
//         <h3 className="card__price">{props.price}</h3>
//         <button className="card__btn">Add to Cart</button>
//       </div>
//     </div>

/*********************************************************************** */

// const Container = styled.div`
//   width: 22vw;
//   display: flex;
//   flex-direction: column;
//   height: 500px;
//   align-items: center;
//   position: relative;

//   .img {
//     width: 100%;
//     height: 90%;
//     background-size: cover;
//     background-position: center;
//     margin-bottom: 5px;
//   }

//   &:hover {
//     .img {
//       opacity: 0.8;
//     }
//   }

//   .custom-button {
//     width: 80;
//     opacity: 0.7;
//     position: absolute;
//     background-color: white;
//     color: black;
//     top: 350px;
//   }

//   &:hover {
//     .image {
//       opacity: 0.8;
//     }
//     .custom-button {
//       opacity: 0.85;
//       display: flex;

//       @media screen and(max-width: 800px) {
//         display: block;
//         opacity: 0.9;
//         min-width: unset;
//         padding: 0 10px;
//       }
//     }
//   }

//   .product-footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 90%;
//       margin-bottom: 15px;
//     }

//     .price {
//       width: 10%;
//     }
//   }
//   @media (max-width: 800px) {
//     width: 40vw;
//   }
// `;

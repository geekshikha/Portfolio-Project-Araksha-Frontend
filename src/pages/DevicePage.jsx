import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeviceCard from "../components/DeviceCard/DeviceCard";

import { fetchCategoriesByIdThunk } from "../store/device/thunks";
import { fetchStarRatingThunk } from "../store/rating/thunks";
import {
  categoryWithDeviceSelector,
  // deviceRatingSelector,
} from "../store/device/selectors";
import { ratingSelector } from "../store/rating/selectors";

const DevicePage = () => {
  // const [sortBy, setSortby] = useState("price");
  const [sortByPrice, setSortByPrice] = useState("price");
  const [sortByRating, setSortByRating] = useState("rating");

  const { id } = useParams();
  const allDevices = useSelector(categoryWithDeviceSelector);
  // const allDeviceWithRating = useSelector(deviceRatingSelector);
  const deviceWithRating = useSelector(ratingSelector);

  // const deviceRating = allDeviceWithRating.map((rating) => rating);
  // console.log("newrat", deviceRating);

  // console.log("allDevices", allDevices);
  // // console.log("rating", deviceWithRating);
  // console.log("newrat", deviceWithRating);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesByIdThunk(id));
    dispatch(fetchStarRatingThunk());
  }, [dispatch, id]);

  //sorting part
  const compareByPrice = (a, b) => b.price - a.price;
  const compareByLowPrice = (a, b) => a.price - b.price;
  // const compa

  const compareByRating = (a, b) => b.star - a.star;
  const compareByLowRating = (a, b) => a.star - b.star;

  //! working code
  // const sortedProducts =
  //   sortBy === "price"
  //     ? [...allDevices].sort(compareByPrice)
  //     : [...allDevices].sort(compareByLowPrice);

  // const sortedProducts =
  //   (sortByPrice === "price"
  //     ? [...allDevices].sort(compareByPrice)
  //     : [...allDevices].sort(compareByLowPrice)) ||
  //   (sortBy === "rating"
  //     ? [...deviceWithRating].sort(compareByRating)
  //     : [...deviceWithRating].sort(compareByLowRating));

  const priceSorted =
    sortByPrice === "price"
      ? [...allDevices].sort(compareByPrice)
      : [...allDevices].sort(compareByLowPrice);

  const ratingSorted =
    sortByRating === "rating"
      ? [...deviceWithRating].sort(compareByRating)
      : [...deviceWithRating].sort(compareByLowRating);

  // const sortedProducts = priceSorted;

  const sortedProducts = priceSorted || ratingSorted;
  // console.log("sorPri", priceSorted);
  console.log("sorRat", ratingSorted);

  // const sortedProducts =
  // sortBy === "price"
  //   ? [...allDevices].sort(compareByPrice)
  //   : sortBy === "rating"
  //   ? [...allDevices].sort(sortByRating)
  //   : sortBy === "boo"
  //   ?

  console.log("sorted", sortedProducts);

  const changeSorting = (event) => {
    setSortByPrice(event.target.value);
    setSortByRating(event.target.value);
  };

  return (
    <Container>
      <div className="sorting">
        <div>
          {" "}
          <h3>Price</h3>
          <select className="sorting" onChange={changeSorting}>
            <option value="price">High to Low</option>
            <option value="lowPrice">Low to High</option>
          </select>
        </div>
        <div>
          {" "}
          <h3 className="sorting">Rating</h3>
          <select className="sorting" onChange={changeSorting}>
            <option value="rating">Highest</option>
            <option value="lowest">Lowest</option>
          </select>
        </div>
      </div>

      <div className="items">
        {sortedProducts.map((item) => (
          <DeviceCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.image}
            description={item.title}
            ratings={item.ratings.map((item) => item)}
          />
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;

const Container = styled.div`
margin: 30px 0 10px 0;
  display: flex;
 height: 75vh;
  // flex-direction: column;

  // .title {
  //   font-size: 38px;
  //   margin: 0 auto 30px;
  // }
h3 {
  padding: 10px;
  margin: 8px 40px 2px 40px;
}
  .sorting {
    padding: 10px;
    margin: 12px 40px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .product-item {
      margin-bottom: 30px;
    }
  //   @media screen and(max-width: 800px) {
  //     display: grid;
  //     grid-template-columns: 1fr 1fr;
  //     grid-gap: 15px;
  //   }
  // }
`;

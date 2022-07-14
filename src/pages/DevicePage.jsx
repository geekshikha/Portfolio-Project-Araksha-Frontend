import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeviceCard from "../components/DeviceCard/DeviceCard";

import { fetchCategoriesByIdThunk } from "../store/device/thunks";
import { categoryWithDeviceSelector } from "../store/device/selectors";

const DevicePage = () => {
  const [sortBy, setSortby] = useState("price");

  const { id } = useParams();
  const allDevices = useSelector(categoryWithDeviceSelector);

  console.log("allDevices", allDevices);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesByIdThunk(id));
  }, [dispatch, id]);

  //sorting part
  const compareByPrice = (a, b) => b.price - a.price;
  const compareByLowPrice = (a, b) => a.price - b.price;
  // const compa

  const sortedProducts =
    sortBy === "price"
      ? [...allDevices].sort(compareByPrice)
      : [...allDevices].sort(compareByLowPrice);

  // const sortedProducts =
  // sortBy === "price"
  //   ? [...allDevices].sort(compareByPrice)
  //   : sortBy === "rating"
  //   ? [...allDevices].sort(sortByRating)
  //   : sortBy === "boo"
  //   ?

  const changeSorting = (event) => {
    setSortby(event.target.value);
  };

  return (
    <Container>
      <div className="sorting">
        <select className="sorting" onChange={changeSorting}>
          <option value="price">High to Low</option>
          <option value="lowPrice">Low to High</option>
        </select>
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
          />
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  // .title {
  //   font-size: 38px;
  //   margin: 0 auto 30px;
  // }

  .sorting {
    padding: 10px;
    margin: 12px 330px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .product-item {
      margin-bottom: 30px;
    }
    @media screen and(max-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }
  }
`;

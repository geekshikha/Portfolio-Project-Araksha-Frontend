import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { fetchDeviceThunk } from "../../store/device/thunks";
import { deviceSelector } from "../../store/device/selectors";

const CategoryCard = () => {
  const categories = useSelector(deviceSelector);
  console.log("categories", categories);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeviceThunk());
  }, [dispatch]);

  if (categories.length === 0) {
    return <div>Loading...</div>;
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = categories.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      //console.log("filtered data", filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(categories);
    }
  };

  return (
    <>
      <div>
        <Input
          className="search"
          type="search"
          value={searchInput}
          placeholder="Search...categories"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <Container className="directory-menu">
        {searchInput.length > 1 ? (
          <>
            {filteredResults.map((category) => (
              <Card key={category.id}>
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt=""
                  style={{ width: "340px" }}
                />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>
                    {
                      <Link to={`/products/${category.id}`}>
                        <button
                          style={{
                            backgroundColor: "#f81894",
                            color: "white",
                            borderRadius: "10px",
                          }}
                        >
                          View Details
                        </button>
                      </Link>
                    }
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        ) : (
          <>
            {categories.map((category) => {
              return (
                <Card key={category.id}>
                  <Card.Img
                    variant="top"
                    src={category.image}
                    alt=""
                    style={{ width: "340px" }}
                  />
                  <Card.Body>
                    <Card.Title>{category.title}</Card.Title>
                    <Card.Text>
                      {
                        <Link to={`/products/${category.id}`}>
                          <button>View Details</button>
                        </Link>
                      }
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </>
        )}
      </Container>
    </>
  );
};

export default CategoryCard;

const Container = styled.div`
  //   display: "flex";
  //   flex-direction: "row";
  width: 120px;

  &.directory-menu {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

const Input = styled.input`
  margin-left: 45%;
  margin-bottom: 5%;
  &.search {
    padding: 1%;
    border-radius: 10px;
  }
`;

// {
//   categories.map((device) => {
//     return (
//       <Card key={device.id}>
//         <Card.Img variant="top" src={device.image} alt="" />
//         <Card.Body style={{ textAlign: "center" }}>
//           <Card.Title>{device.title}</Card.Title>
//           <Card.Text>
//             {
//               <Link to={`/products/${device.id}`}>
//                 <button
//                   style={{
//                     backgroundColor: "#f81894",
//                     color: "white",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   View Details
//                 </button>
//               </Link>
//             }
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   });
// }
// style={{
//     width: "18rem",
//     marginLeft: "30%",
//     marginTop: "2%",
//   }}

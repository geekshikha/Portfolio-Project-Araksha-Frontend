import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import Card from "react-bootstrap/Card";
import styled from "styled-components";
// import SpecificDevice from "../SpecificDevice/SpecificDevice";
// import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard/CategoryCard";

import { fetchCategoriesThunk } from "../store/device/thunks";
import { deviceSelector } from "../store/device/selectors";

const CategoryPage = () => {
  const categories = useSelector(deviceSelector);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesThunk());
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
          placeholder="Categories.."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <Container className="directory-menu">
        {searchInput.length > 1 ? (
          <>
            {filteredResults.map((category) => (
              <CategoryCard
                key={category._id}
                id={category.id}
                title={category.title}
                imageUrl={category.image}
              />
            ))}
          </>
        ) : (
          <>
            {categories.map((category) => {
              return (
                <CategoryCard
                  key={category._id}
                  id={category.id}
                  title={category.title}
                  imageUrl={category.image}
                />
              );
            })}
          </>
        )}
      </Container>
    </>
  );
};

export default CategoryPage;

//       <Container className="directory-menu">
//         {searchInput.length > 1 ? (
//           <>
//             {filteredResults.map((category) => (
//               <Card key={category.id}>
//                 <Card.Img
//                   variant="top"
//                   src={category.image}
//                   alt=""
//                   style={{ width: "340px" }}
//                 />
//                 <Card.Body style={{ textAlign: "center" }}>
//                   <Card.Title>{category.title}</Card.Title>
//                   <Card.Text>
//                     {
//                       <Link to={`/products/${category.id}`}>
//                         <button
//                           style={{
//                             backgroundColor: "#f81894",
//                             color: "white",
//                             borderRadius: "10px",
//                           }}
//                         >
//                           View Details
//                         </button>
//                       </Link>
//                     }
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             ))}
//           </>
//         ) : (
//           <>
//             {categories.map((category) => {
//               return (
//                 <Card key={category.id}>
//                   <Card.Img
//                     variant="top"
//                     src={category.image}
//                     alt=""
//                     style={{ width: "340px" }}
//                   />
//                   <Card.Body>
//                     <Card.Title>{category.title}</Card.Title>
//                     <Card.Text>
//                       {
//                         <Link to={`/products/${category.id}`}>
//                           <button>View Details</button>
//                         </Link>
//                       }
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               );
//             })}
//           </>
//         )}
//       </Container>
//       {categories.map((category) => {
//         return <SpecificDevice devices={category.devices} />;
//       })}
//     </>
//   );
// };

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
  // margin-left: 45%;
  // margin-bottom: 5%;
  margin: 5% 45%;
  border: 1px solid #161ade;
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

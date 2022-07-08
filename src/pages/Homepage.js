import { Title } from "../styled";
import { Link } from "react-router-dom";
import { LinkWord } from "../styled";

import Hero from "../components/Hero/Hero";
import ExampleProduct from "../components/EampleProduct/ExampleProduct";
import Araksha from "../Videos/Araksha.mp4";
import { Container } from "../globalStyles";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <ExampleProduct />
      <Container>
        <video width="1300" height="700" controls>
          <source src={Araksha} type="video/mp4" />
        </video>
      </Container>
    </>
  );
};
export default Homepage;

// margin-left: auto;
// margin-right: auto;
// display: block.

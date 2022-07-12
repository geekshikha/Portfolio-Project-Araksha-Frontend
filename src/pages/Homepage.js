// import { Title } from "../styled";
// import { Link } from "react-router-dom";
// import { LinkWord } from "../styled";

import Hero from "../components/Hero/Hero";
import ExampleProduct from "../components/EampleProduct/ExampleProduct";
import Araksha from "../Videos/Araksha.mp4";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <ExampleProduct />
      <Section>
        <video width="1300" height="700" controls>
          <source src={Araksha} type="video/mp4" />
        </video>
      </Section>
    </>
  );
};
export default Homepage;

const Section = styled.div`
  color: #fff;
  padding: 60px 160px;
`;

// margin-left: auto;
// margin-right: auto;
// display: block.

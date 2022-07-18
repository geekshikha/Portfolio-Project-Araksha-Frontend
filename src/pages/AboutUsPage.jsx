import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import AboutUs from "../resources/aboutMain.png";
import About1 from "../resources/aboutus.png";
import Edited from "../resources/edited.png";
import First from "../resources/about-image2.jpeg";

const AboutUsPage = () => {
  return (
    <div>
      <Parallax strength={300} bgImage={About1}>
        <Section className="content">
          <Section1 className="text-content">
            The Araksha Story
            <p>"A picture is worth a thousand words" </p>
          </Section1>
        </Section>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={First}>
        <Section className="content">
          <Section1 className="text-content">
            We Design your emotions ❤️
          </Section1>
        </Section>
      </Parallax>

      <Parallax strength={-70} bgImage={Edited}>
        <Section className="content">
          <Section1
            className="text-content"
            style={{ color: "#A149FA" }}
          ></Section1>
        </Section>
      </Parallax>
      <Parallax strength={1700} bgImage={AboutUs}>
        <Section className="content">
          <Section1 className="text-content" style={{ color: "#79dae8" }}>
            {" "}
            Just love & care for your people, without any worries ❤️
            <p>
              Our value for our customers is our ability to accurately estimated
              performance and believes in having a good time while doing what we
              love, and we do love what we do.
            </p>
          </Section1>
        </Section>
      </Parallax>
    </div>
  );
};

export default AboutUsPage;

const Section = styled.div`
  height: 70vh;
`;

const Section1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 5px 15px;
  transform: translate(-50%, -50%);
  //   background: #79dae8;
  color: white;
  //   border-radius: 12px;
  font-size: 50px;
`;

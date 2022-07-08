import styled from "styled-components";
import { Section } from "../../globalStyles";
import { motion } from "framer-motion";

export const HeroSection = styled(Section)`
  background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
  background-size: cover;
  background-attachment: fixed;

  align-items: center;
  height: 640px;
  position: relative;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 592px;
    // margin-top: 220px;
  }
  @media screen and (min-width: 992px) {
    height: 310px;
  }
  @media screen and (min-width: 1200px) {
    height: 440px;
  }
  @media screen and (min-width: 2000px) {
    height: 470px;
  }
`;
//   z-index: 11;

export const HeroImage = styled.img`
  z-index: 10;
  width: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;
  &.pattern {
    height: 100%;
    max-height: 100%;
    top: 0;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  padding: 0 15px;
  z-index: 10;
  position: relative;
`;

export const Heading = styled.h1`
  margin-bottom: 1.5rem;
  font-size: clamp(2.8rem, 6vw, 6.7rem);
  line-height: 1.1;
  font-weight: 600;
  text-align: center;
  color: white;
`;

export const HeroText = styled.div`
  text-align: center;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  /* margin-bottom: 1.3rem; */
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  height: 170px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
`;

export const HeroButton = styled(motion.button)`
  position: absolute;
  width: 250px;
  margin: 0 auto;
  padding: 15px 20px;
  bottom: calc(100vh - 100px);
  right: 50%;
  transform: translate(50%);
  font-weight: 700;
  font-size: 0.688rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  border-radius: 25px;
  border: none;
  background-color: white;
  color: #5238b1;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &.corner {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    width: 64px;
    height: 64px;
    padding: 10px;
    background-color: #ef4b6c;
    border-radius: 50%;
  }
  &:hover {
    box-shadow: 0 0 9px 9px #5238b1;
    transition: box-shadow 0.3s ease-in;
  }
`;

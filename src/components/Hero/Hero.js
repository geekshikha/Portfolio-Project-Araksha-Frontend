import React, { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import {
  HeroSection,
  Heading,
  HeroText,
  ButtonContainer,
  HeroButton,
  HeroImage,
  HeroContent,
  ButtonWrapper,
} from "./HeroStyles";
import { useInView } from "react-intersection-observer";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
  };

  const { ref, inView } = useInView({
    rootMargin: "-100px",
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  //   <HeroImage className="guy" src="./images/hero-guy-1.png" />
  return (
    <>
      <HeroSection id="hero">
        <HeroImage className="pattern" src="./images/hero2.png" />

        <HeroContent>
          <Heading>We care for your loved ones!</Heading>
          <HeroText>We give shape to your emotions!</HeroText>
          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton
                onClick={toggleModal}
                className={inView ? "" : "corner"}
              >
                {inView ? (
                  <> Chat with us</>
                ) : (
                  <FiMail color="white" size="2.3rem" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>
        </HeroContent>
      </HeroSection>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Hero;

// <CharacterContainer>
// <ImageCharacter
//   dragConstraints={dragConstraints}
//   className="one"
//   src="./images/image 1.png"
// />
// <ImageCharacter
//   dragConstraints={dragConstraints}
//   className="two"
//   src="./images/image 2.png"
// />
// <ImageCharacter
//   variants={variants}
//   whileHover="hover"
//   drag
//   dragConstraints={dragConstraints}
//   className="three"
//   src="./images/image 3.png"
// />
// </CharacterContainer>
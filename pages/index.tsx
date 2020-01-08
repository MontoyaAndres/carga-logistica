import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Services } from "../components/Services";
import { Experience } from "../components/Experience";
import { Transport } from "../components/Transport";
import { Form } from "../components/Form";

const TitleSection = styled(motion.div)`
  padding: 1em 2em;
  display: flex;
  justify-content: center;

  @media (min-width: 640px) {
    padding: 1em 4em;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 1em 8em;
  }
`;

const Title = styled.h1`
  color: #677282;
  font-weight: 800;
  font-size: 2.5em;
  padding: 0 1em;

  @media (min-width: 768px) {
    font-size: 4em;
  }
`;

const BackgroundImage = styled.div`
  background-image: url("/Cover.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const index = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <TitleSection
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Title>
          {inView && <>Transportamos todo lo que tu negocio necesite.</>}
        </Title>
      </TitleSection>
      <BackgroundImage />
      <Services />
      <Experience />
      <Transport />
      <Form />
    </>
  );
};

export default index;

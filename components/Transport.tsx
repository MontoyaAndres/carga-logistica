import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  background-color: #677282;
  padding: 5em 1em;

  @media (min-width: 768px) {
    padding: 5em 2em;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    padding: 5em 4em;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

const Image = styled.img`
  height: auto;
  width: 100%;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Section = styled.section`
  width: auto;

  @media (min-width: 1280px) {
    width: 400px;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: white;
  line-height: 2em;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Transport = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Desde pick-ups hasta trailers.</Title>
        <Description>
          No importa lo que quieras transportar, nosotros podemos llevarlo con
          nuestros camiones de 1, 3.5, 5, 10 y 15 toneladas; y si eso no es
          suficiente, contamos con trailers.
        </Description>
      </Section>
      <Image src="/Ilustracion.png" alt="Ilustración" />
    </Wrapper>
  );
};

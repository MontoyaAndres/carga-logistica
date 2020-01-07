import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: #677282;
  padding: 8em 2em;

  @media (min-width: 768px) {
    padding: 8em 4em;
  }

  @media (min-width: 1024px) {
    padding: 8em 5em;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Image = styled.img`
  height: 180px;
  width: 100%;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 240px;
    width: 440px;
  }

  @media (min-width: 1280px) {
    height: auto;
    width: 680px;
  }
`;

const Section = styled.section`
  width: auto;

  @media (min-width: 1024px) {
    width: 450px;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1280px) {
    font-size: 4rem;
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

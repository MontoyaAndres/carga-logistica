import React from "react";
import styled from "styled-components";

import { pushToContact } from "../utils/pushToContact";

const Title = styled.h2`
  color: #677282;
  font-weight: 800;
  font-size: 3em;
  text-align: center;
  padding: 2em 0;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-column-gap: 1em;
  margin: 0 1em;
  padding-bottom: 8em;

  @media (min-width: 768px) {
    margin: 0 2em;
  }

  @media (min-width: 1024px) {
    margin: 0 6em;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: solid #eef0f1 1px;
  height: 250px;
  display: grid;
  grid-template-rows: 50px 2fr auto;
  padding: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1024px) {
    padding: 2em;
    margin-bottom: 0;
  }
`;

const TitleCard = styled.h3`
  color: #677282;
  font-weight: 800;
  font-size: 25px;
  margin: 0;
`;

const DescriptionCard = styled.p`
  color: #677282;
`;

const ActionsCard = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f47c20;
  font-weight: 800;
`;

const dataCard = [
  {
    title: "Transporte de carga",
    description:
      "Transportamos la mercancía de tu negocio con nuestra variedad de camiones que son desde 1 Tonelada hasta Trailers."
  },
  {
    title: "Planeación de fletes",
    description: "Te ayudamos a planear, asesorar y administrar tus fletes."
  },
  {
    title: "Mudanzas",
    description:
      "Contamos con el personal adecuado para que tus mudanzas sean las más rápidas y con la confianza de que tus cosas están cuidadas por los mejores."
  }
];

export const Services = () => {
  return (
    <>
      <Title>Nuestros servicios</Title>
      <Wrapper>
        {dataCard.map((card, index) => (
          <Card key={index} onClick={() => pushToContact()}>
            <TitleCard>{card.title}</TitleCard>
            <DescriptionCard>{card.description}</DescriptionCard>
            <ActionsCard>
              <span>Cotizar servicio</span>
              <img src="/Icons/arrow_forward.svg" alt="Arrow forward" />
            </ActionsCard>
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

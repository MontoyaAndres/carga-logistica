import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 10px;
  position: relative;

  @media (min-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    justify-items: end;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) and (max-width: 1024px) {
    &:nth-last-of-type(-n + 2) {
      display: none;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  padding: 3em;
  margin: 1em 1em 0 1em;
  position: absolute;
  bottom: 0;
  height: 60%;
  box-sizing: border-box;

  @media (min-width: 640px) {
    height: 40%;
  }

  @media (min-width: 768px) {
    padding: 0 4em;
    height: 100%;
    width: 500px;
  }

  @media (min-width: 1024px) {
    margin-right: 13%;
  }
`;

const TitleBox = styled.h2`
  color: #677282;
  font-weight: 800;
  font-size: 2.3em;
  margin: 0;
  margin-bottom: 1em;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

const Options = styled.section`
  padding-bottom: 0.5em;

  &:last-child {
    padding-bottom: 0;
  }
`;

const IconContainer = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const Icon = styled.img`
  margin-right: 0.5em;

  @media (min-width: 768px) {
    width: 30px;
  }
`;

const Anchor = styled.a`
  color: #f47c20;
  font-size: 1.1em;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Experience = () => {
  const trucks = [
    "/1.png",
    "/2.png",
    "/5.png",
    "/8.png",
    "/3.png",
    "/4.png",
    "/6.png",
    "/7.png"
  ];

  return (
    <Wrapper>
      <Box>
        <TitleBox>Nuestra experiencia nos respalda.</TitleBox>
        <div>
          <Options>
            <IconContainer>
              <Icon src="/Icons/cake.svg" alt="cake" />
            </IconContainer>
            <Anchor>+3 años</Anchor>
          </Options>

          <Options>
            <IconContainer>
              <Icon src="/Icons/done_all.svg" alt="done all" />
            </IconContainer>
            <Anchor>+250 viajes completados</Anchor>
          </Options>

          <Options>
            <IconContainer>
              <Icon src="/Icons/directions_car.svg" alt="directions car" />
            </IconContainer>
            <Anchor>+5000 Km recorridos</Anchor>
          </Options>
        </div>
      </Box>
      {trucks.map((truck, index) => (
        <Image key={index} src={truck} alt={`Truck ${index}`} />
      ))}
    </Wrapper>
  );
};

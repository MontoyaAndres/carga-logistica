import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  background-color: #677282;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2em 4em;

  @media (min-width: 768px) {
    padding: 2em 9em;
    flex-direction: row;
    align-items: center;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: 9em;
  margin-bottom: 4em;

  @media (min-width: 768px) {
    height: 45px;
    margin-bottom: 0;
  }
`;

const IconContainer = styled.span`
  list-style-type: none;
  vertical-align: middle;
  display: inline-block;
`;

const Icon = styled.img`
  margin-right: 1em;
`;

const Anchor = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Logo
        src="/Icons/Carga_Logistica_Logo_2.png"
        alt="Carga Logistica Logo 2"
      />
      <section>
        <div>
          <IconContainer>
            <Icon src="/Icons/phone_callback_white.svg" alt="phone callback" />
          </IconContainer>
          <Anchor>33-2630-8608</Anchor>
        </div>
        <br />
        <div>
          <IconContainer>
            <Icon src="/Icons/room_white.svg" alt="room" />
          </IconContainer>
          <Anchor>Guadalajara, Jalisco</Anchor>
        </div>
      </section>
    </Wrapper>
  );
};

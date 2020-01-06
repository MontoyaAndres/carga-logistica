import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import scrollIntoView from "smooth-scroll-into-view-if-needed";

import { Footer } from "../components/Footer";

interface PhoneSectionProps {
  isMenuOpen: boolean;
}

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  z-index: 1;

  @media (min-width: 640px) {
    padding: 1em 2em;
  }

  @media (min-width: 768px) {
    padding: 1em 5em;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 7em;

  @media (min-width: 768px) {
    width: 8em;
  }
`;

const MenuLogo = styled.img`
  height: auto;
  width: 2em;
  display: initial;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Section = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: initial;
  }
`;

const PhoneSection = styled.div<PhoneSectionProps>`
  position: sticky;
  top: 4em;
  background-color: white;
  display: ${props => (props.isMenuOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 1em 2em;
  box-shadow: 0 4px 10px -6px #222;

  @media (min-width: 640px) {
    padding: 2em 4em;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Contact = styled.span`
  display: flex;
  margin-bottom: 2em;

  @media (min-width: 768px) {
    vertical-align: middle;
    display: inline-block;
    margin-bottom: 0;
  }
`;

const PhoneLogo = styled.img`
  margin-right: 1em;

  @media (min-width: 768px) {
    margin-right: 2em;
  }
`;

const Telephone = styled.a`
  color: #677282;
  margin-right: 2em;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #f47c20;
  color: white;
  padding: 1em 3em;
  border: none;
  font-weight: bold;
`;

export const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function pushContact() {
    console.log("hola");
    const node = document.querySelector("#form");

    scrollIntoView(node);
  }

  return (
    <>
      <NavBar>
        <Link href="/">
          <Logo
            src="/Icons/Carga_Logistica_Logo.png"
            alt="Carga Logistica Logo"
          />
        </Link>
        <MenuLogo
          src={isMenuOpen ? "/Icons/close.svg" : "/Icons/menu.svg"}
          alt="Menu"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        <Section>
          <Contact>
            <PhoneLogo src="/Icons/phone_callback.svg" alt="phone callback" />
          </Contact>
          <Telephone href="">33 - 3245 - 4137</Telephone>
          <Button onClick={() => pushContact()}>Contáctanos</Button>
        </Section>
      </NavBar>

      <PhoneSection isMenuOpen={isMenuOpen}>
        <Contact>
          <PhoneLogo src="/Icons/phone_callback.svg" alt="phone callback" />
          <Telephone href="">33 - 3245 - 4137</Telephone>
        </Contact>
        <Button onClick={() => pushContact()}>Contáctanos</Button>
      </PhoneSection>
      {children}
      <Footer />
    </>
  );
};

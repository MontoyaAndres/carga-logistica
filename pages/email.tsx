import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  background: radial-gradient(
      circle farthest-side at bottom,
      transparent 40%,
      rgba(255, 255, 255, 0.9) 80%
    ),
    url("/Fondo.png") center/cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #677282;
  font-weight: bold;
  font-size: 2em;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Button = styled.button`
  background-color: #f47c20;
  color: white;
  padding: 1em 5em;
  border: none;
  font-weight: bold;
  margin-top: 100px;
`;

const email = () => {
  return (
    <>
      <Head>
        <title>¡Enviado con exito!</title>
      </Head>
      <Wrapper>
        <Title>
          Formularo enviado, en breve nos pondremos en contacto contigo.
        </Title>
        <Link href="/">
          <Button>Ir al inicio</Button>
        </Link>
      </Wrapper>
    </>
  );
};

export default email;

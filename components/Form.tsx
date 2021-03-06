import React, { useState } from "react";
import Router from "next/router";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

import { IEmailValues } from "../types/IEmailValues";

const Wrapper = styled.div`
  background: radial-gradient(
      circle farthest-side at bottom,
      transparent 40%,
      rgba(255, 255, 255, 0.9) 80%
    ),
    url("/Fondo.png") center/cover;
  padding: 6em 1em;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 6em 0;
  }
`;

const Title = styled.h2`
  color: #677282;
  font-weight: 800;
  font-size: 2em;
  margin-bottom: 2em;
  padding: 0 1em;

  @media (min-width: 768px) {
    padding: 0;
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    width: 10em;
    margin-bottom: 0;
  }
`;

const FormBox = styled(animated.form)`
  background-color: white;
  box-shadow: 0 0 10px -5px;
  display: flex;
  flex-direction: column;
  padding: 3em 2em;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const FormTitle = styled.h3`
  color: #677282;
  font-weight: 800;
  font-size: 2em;
  margin: 0;
  margin-bottom: 1em;
`;

const Input = styled.input`
  background-color: white;
  border: solid #677282 1px;
  padding: 1em 2em;
  margin-bottom: 1em;
  opacity: 0.45;

  &::placeholder {
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  background-color: white;
  border: #677282 solid 1px;
  padding: 1em 1.5em;
  margin-bottom: 1em;
  font-family: "Sarabun", sans-serif;
  opacity: 0.45;

  &::placeholder {
    opacity: 1;
  }
`;

const Button = styled.button`
  color: white;
  padding: 1em 3em;
  border: none;
  font-weight: 800;
  background-color: ${props => (props.disabled ? "#677282" : "#f47c20")};
  transition: background-color 1s ease;
`;

export const Form = () => {
  const [values, setValues] = useState<IEmailValues>({
    name: "",
    email: "",
    telephone: "",
    description: ""
  });
  const [isEmailSending, setEmailSending] = useState(false);

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  const formStyle = useSpring({
    opacity: 0,
    ...(formInView && {
      from: {
        opacity: 0,
        transform: "scale3d(0.3, 0.3, 0.3)"
      },
      to: {
        opacity: 1,
        transform: "scale3d(1, 1, 1)"
      }
    })
  });

  async function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmailSending(true);

    const response = await fetch(process.env.EMAIL_API, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    });

    const json = await response.json();

    if (json.response) {
      Router.push("/email");
    }
  }

  return (
    <Wrapper ref={formRef} id="form">
      <Title>
        Llena el formulario y cotiza tu servicio de transportes hoy.
      </Title>
      <FormBox method="POST" onSubmit={sendForm} style={formStyle}>
        <FormTitle>Contáctanos</FormTitle>
        <Input
          name="name"
          placeholder="Tú nombre"
          type="text"
          required
          value={values.name}
          onChange={e =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Input
          name="email"
          placeholder="Dirección de email"
          type="email"
          required
          value={values.email}
          onChange={e =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Input
          name="telephone"
          placeholder="Número de teléfono"
          type="tel"
          required
          value={values.telephone}
          onChange={e =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <TextArea
          name="description"
          placeholder="Descripción de tu servicio"
          required
          value={values.description}
          onChange={e =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
        <Button type="submit" disabled={isEmailSending}>
          {isEmailSending ? "Enviando correo, por favor espere" : "Enviar"}
        </Button>
      </FormBox>
    </Wrapper>
  );
};

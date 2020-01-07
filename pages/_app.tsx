import React from "react";
import App from "next/app";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RevealGlobalStyles } from "react-genie";

import { Layout } from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    font-family: 'Sarabun', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Carga Logística</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <ThemeProvider theme={{}}>
          <Layout>
            <GlobalStyle />
            <RevealGlobalStyles />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

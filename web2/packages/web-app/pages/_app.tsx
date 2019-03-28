import React from "react";
import App, { Container, NextAppContext } from "next/app";
import Header from "../components/Header/Header";
import Head from "next/head"

import "../styles/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div id="site-theme">
        <Head>
          <title>
            Bystro Genomics
          </title>
        </Head>
        <Header />
        <div id="main">
          <Container>
            <Component {...pageProps} />
          </Container>
        </div>
      </div>
    );
  }
}

export default MyApp;

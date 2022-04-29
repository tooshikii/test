import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";
import { BackdropProvider } from "../components/MenuBackdrop/Context";
import { useApollo } from "../lib/apollo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <BackdropProvider>
        <Component {...pageProps} />
      </BackdropProvider>
    </ApolloProvider>
  );
}

export default MyApp;

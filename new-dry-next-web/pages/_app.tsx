import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { BackdropProvider } from "../components/MenuBackdrop/Context";
import { useApollo } from "../lib/apollo";
import "../styles/globals.css";
import theme from "../theme";
import "tailwindcss/tailwind.css";


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles  = document.querySelector("#jss-server-side") as any;
    if (jssStyles !== null) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BackdropProvider>
            <Component {...pageProps} />
          </BackdropProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}

export default MyApp;

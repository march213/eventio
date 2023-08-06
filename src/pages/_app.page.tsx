import React from "react";
import { ErrorBoundary, AppProps } from "@blitzjs/next";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { withBlitz } from "src/blitz-client";
import "src/styles/globals.css";
import { RootErrorFallback } from "../core/components/RootErrorFallback";

let mantineTheme: MantineThemeOverride = {
  colorScheme: "dark",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <Component {...pageProps} />
      </MantineProvider>
    </ErrorBoundary>
  );
}

export default withBlitz(MyApp);

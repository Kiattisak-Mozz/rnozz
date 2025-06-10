import "@mantine/core/styles.css";
import "./globals.css";
import React from "react";
import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import ThemeProvider from "../ThemeProvider";

export const metadata = {
  title: "Portfolio",
  description: "",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={"auto"} />

        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

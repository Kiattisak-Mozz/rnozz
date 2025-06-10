"use client";

import React from "react";
import { MantineProvider } from "@mantine/core";
import theme from "./theme";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MantineProvider theme={theme} defaultColorScheme={"auto"}>
        {children}
      </MantineProvider>
    </>
  );
}

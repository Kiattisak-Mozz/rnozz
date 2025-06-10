/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Button, useMantineColorScheme } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect } from "react";
interface ColorSchemeToggleProps {
  setIsOpenLamp?: Dispatch<SetStateAction<boolean>>;
}
export function ColorSchemeToggle({ setIsOpenLamp }: ColorSchemeToggleProps) {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  useEffect(() => {
    getThemeColor();
  }, [colorScheme]);

  const getThemeColor = () => {
    const scheme = document.documentElement.getAttribute(
      "data-mantine-color-scheme"
    ) as "light" | "dark" | "auto";

    setIsOpenLamp?.(scheme === "dark" ? true : false);
  };

  return (
    <div style={{ position: "absolute" }}>
      <Button onClick={() => setColorScheme("light")}>Light</Button>
      <Button onClick={() => setColorScheme("dark")}>Dark</Button>
      <Button onClick={() => setColorScheme("auto")}>Auto</Button>
    </div>
  );
}

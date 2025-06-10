"use client";
import Cat from "@components/animations/Cat";
import { ColorSchemeToggle } from "@components/ColorSchemeToggle/ColorSchemeToggle";
import { Card, Container, Transition } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [isOpenLamp, setIsOpenLamp] = useState(false);

  return (
    <Container
      style={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="background-image"
      size={"100%"}
      p={0}
      display={"flex"}
    >
      <Transition
        mounted={isOpenLamp}
        transition="fade"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <div
            style={{
              ...styles,
              zIndex: 0,
              position: "absolute",
              height: "100vh",
              width: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
            }}
          />
        )}
      </Transition>

      <Card
        mih={260}
        w={"clamp(300px,70vw,30vw)"}
        h={"50vh"}
        radius={16}
        padding={16}
        bg={isOpenLamp ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.7)"}
        pos={"absolute"}
        top={100}
      >
        1
      </Card>
      {/* <Lamp
        play={isOpenLamp}
        style={{
          // top: -100,
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          // width: "1000px",
          // height: "100vh",
          position: "absolute",
          // pointerEvents: "fill",
        }}
      /> */}

      <ColorSchemeToggle setIsOpenLamp={setIsOpenLamp} />
      <Cat />
    </Container>
  );
}

"use client";
import Cat from "@components/animations/Cat";
// import Lamp from "@components/animations/Lamp";
import { ColorSchemeToggle } from "@components/ColorSchemeToggle/ColorSchemeToggle";
import {
  Burger,
  Button,
  Card,
  Container,
  Flex,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function Home() {
  const [isOpenLamp, setIsOpenLamp] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Container
        style={{
          overflow: "hidden",
          position: "relative",
          // alignItems: "center",
          // justifyContent: "center",
        }}
        className="background-image"
        size={"100%"}
        p={0}
        display={"flex"}
      >
        <Flex
          pos={"absolute"}
          p={8}
          justify={"end"}
          style={{
            width: "100%",
          }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="md"
            lineSize={4}
          />
          <Button visibleFrom="sm" onClick={toggle}>
            Menu
          </Button>
        </Flex>
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
                background: "rgba(0, 0, 0, 0.35)",
                pointerEvents: "none",
              }}
            />
          )}
        </Transition>
        {opened && (
          <Flex w={"100%"} style={{ justifyContent: "center" }}>
            <Card
              mih={260}
              w={"clamp(300px,59vw,50vw)"}
              maw={500}
              h={"50vh"}
              radius={16}
              padding={16}
              bg={
                isOpenLamp ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
              }
              pos={"absolute"}
              top={100}
            >
              1
            </Card>
          </Flex>
        )}
        {/* <Lamp play={isOpenLamp} /> */}

        <ColorSchemeToggle setIsOpenLamp={setIsOpenLamp} />
        <Flex
          w={"100%"}
          pos={"absolute"}
          bottom={-10}
          // bg={"rgb(255, 238, 238)"}
          style={{ justifyContent: "center" }}
        >
          <Cat />
        </Flex>
      </Container>
    </>
  );
}

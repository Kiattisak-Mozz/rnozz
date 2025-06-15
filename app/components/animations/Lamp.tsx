"use client";

import React, { useEffect } from "react";
import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";

interface LampProps {
  play: boolean;
  style?: React.CSSProperties;
}

const Lamp = ({ play = false, style }: LampProps) => {
  const nameMachine = "lampMachine";
  const lightSwitch = "lightSwitch";

  const { rive, RiveComponent } = useRive({
    src: "/animations/lamp.riv",
    autoplay: true,
    stateMachines: [nameMachine],
    layout: new Layout({
      fit: Fit.FitHeight,
      alignment: Alignment.Center,
    }),
  });

  const lightSwitchInput = useStateMachineInput(rive, nameMachine, lightSwitch);

  useEffect(() => {
    if (lightSwitchInput) {
      lightSwitchInput.value = play || 0;
    }
  }, [lightSwitchInput, play]);

  return (
    <RiveComponent
      style={{
        zIndex: 1,
        position: "absolute",

        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        // width: "65vw",
        // height: "100vh",
        // pointerEvents: "fill",
        // backgroundColor: "red",
        ...style,
      }}
    />
  );
};

export default Lamp;

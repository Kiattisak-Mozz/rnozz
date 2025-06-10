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
      // fit: Fit.FitHeight,
      alignment: Alignment.Center,
    }),
  });

  const lightSwitchInput = useStateMachineInput(rive, nameMachine, lightSwitch);

  useEffect(() => {
    if (lightSwitchInput) {
      lightSwitchInput.value = play || 0;
    }
  }, [lightSwitchInput, play]);

  return <RiveComponent style={style} />;
};

export default Lamp;

"use client";

import React from "react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

interface LampProps {
  style?: React.CSSProperties;
}

const Cat = ({ style }: LampProps) => {
  const nameMachine = "backCat";

  const { RiveComponent } = useRive({
    src: "/animations/backcat.riv",
    autoplay: true,
    stateMachines: [nameMachine],
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <RiveComponent
      // role="img"
      style={{
        zIndex: 1,
        // position: "absolute",

        height: "40vh",
        width: "46vh",
        // background: "red",
        ...style,
      }}
    />
  );
};

export default Cat;

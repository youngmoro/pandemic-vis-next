import React, { useRef, useEffect } from "react";
import * as GIO from "giojs";
import data from "../data/giojs";

const Earth = () => {
  // const initCountry = "JP";
  const ref = useRef(null);
  const config = {
    control: {
      // initCountry,
      stats: false,
      disableUnmentioned: false,
      lightenMentioned: true,
      inOnly: false,
      outOnly: false,
      halo: true,
      transparentBackground: false,
      autoRotation: false,
      rotationRatio: 1,
    },
    color: {
      surface: 16777215,
      selected: 0xaaaaaa,
      in: 0x20abe2,
      out: 0xff4d76,
      halo: 0xaaaaaa,
      background: 0x342e47,
    },
    brightness: {
      ocean: 0.76,
      mentioned: 0.56,
      related: 1,
    },
  };

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, config);

    controller.addData(data);
    controller.init();
  }, []);

  return <div style={{ width: "100%", minHeight: "500px" }} ref={ref} />;
};

export default Earth;

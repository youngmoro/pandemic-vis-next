import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const GlobeDefault = () => {
  const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));
  return (
    <Globe
      width={800}
      backgroundColor={"#342e47"}
      globeImageUrl="earth-night.jpeg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      waitForGlobeReady={true}
    />
  );
};
export default GlobeDefault;

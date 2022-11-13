import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const GlobeDefault = () => {
  const Globe = dynamic(() => import("react-globe.gl"), {
    // suspense: true,
    ssr: false,
  });

  const N = 1000;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: "#881131",
  }));
  return (
    <Globe
      width={800}
      backgroundImageUrl="universe.jpg"
      globeImageUrl="earth-virus.jpeg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      pointRadius={2}
      waitForGlobeReady={true}
    />
  );
};
export default GlobeDefault;

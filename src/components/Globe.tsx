import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import strains from "../data/strains";

const GlobeDefault = () => {
  const Globe = dynamic(() => import("react-globe.gl"), {
    // suspense: true,
    ssr: false,
  });

  const gData = strains.map((e) => ({
    lat: e.lat,
    lng: e.lon,
    size: Number(e.divergence) * 0.01,
    color: "#881131",
  }));

  return (
    <Globe
      width={700}
      height={700}
      backgroundImageUrl="whiteuniverse.png"
      globeImageUrl="earth-virus.jpeg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      pointRadius={1}
      waitForGlobeReady={true}
    />
  );
};
export default GlobeDefault;

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
    //新しいウイルスほど長い
    size: Number(e.divergence) * 0.01,
    //新しい日付ほど赤い、細い
    color: ["#aa113188", "#883333", "#666666", "#ffffff"][
      2022 - Number(new Date(e.date).getFullYear())
    ],
    r: 2023 - Number(new Date(e.date).getFullYear()),
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
      pointRadius="r"
      waitForGlobeReady={true}
    />
  );
};
export default GlobeDefault;

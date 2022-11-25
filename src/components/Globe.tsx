import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import strains from "../data/strains";

const GlobeDefault = () => {
  const Globe = dynamic(() => import("react-globe.gl"), {
    // suspense: true,
    ssr: false,
  });

  const calDiff = (date: Date) => {
    const now = new Date("2022 / 10 / 10");
    const diffTime = now.getTime() - date.getTime();
    const diffDay: number = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDay;
  };

  const rgb2hex = (rgb: number[]) => {
    return (
      "#" +
      rgb
        .map(function (value) {
          return ("0" + value.toString(16)).slice(-2);
        })
        .join("")
    );
  };

  const calColor = (date: Date) => {
    const diff = calDiff(date); //0-1017
    const red = Math.floor(255 - (diff / 1017) * 140);
    const blue = Math.floor(100 + (diff / 1017) * 80);
    return rgb2hex([red, 100, blue]);
  };

  const gData = strains.map((e) => ({
    lat: e.lat,
    lng: e.lon,
    //新しいウイルスほど長い、細い
    size: Number(e.divergence) * 0.005,
    r: 0.5 + 25 / Number(e.divergence),
    //新しい日付ほど赤い
    color: calColor(new Date(e.date)),
    label: e.division,
  }));

  return (
    <Globe
      width={700}
      height={700}
      backgroundImageUrl="whiteuniverse.png"
      globeImageUrl="earth-virus.jpeg"
      showGraticules={true}
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      pointRadius="r"
      pointLabel="label"
      pointResolution={3}
      waitForGlobeReady={true}
    />
  );
};
export default GlobeDefault;

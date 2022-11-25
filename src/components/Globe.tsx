import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import strains from "../data/strains";
import GUI from "lil-gui";

const GlobeDefault = () => {
  const [startYear, setStartYear] = useState(2019);
  const [endYear, setEndYear] = useState(2022);
  const params = {
    startYear: startYear,
    endYear: endYear,
  };

  useEffect(() => {
    const gui = new GUI();
    gui.add(params, "startYear").onFinishChange((e: number) => {
      setStartYear(e);
    });
    gui.add(params, "endYear").onFinishChange((e: number) => {
      setEndYear(e);
    });
  }, []);

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
    return rgb2hex([red, 100, blue, 180]);
  };

  const mapping = (array: any[]) => {
    return array.map((e) => ({
      lat: e.lat,
      lng: e.lon,
      //新しいウイルスほど長い、細い
      size: Number(e.divergence) * 0.005,
      r: 0.5 + 25 / Number(e.divergence),
      //新しい日付ほど赤い
      color: calColor(new Date(e.date)),
      label: "division:" + e.division + "\ndivergence:" + e.divergence,
    }));
  };

  const [gData, setgData] = useState(mapping(strains));

  useEffect(() => {
    setgData(
      mapping(
        strains.filter(
          (e) =>
            new Date(e.date).getFullYear() >= startYear &&
            new Date(e.date).getFullYear() <= endYear
        )
      )
    );
  }, [startYear, endYear]);

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

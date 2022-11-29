import React, { useEffect, useRef, useState } from "react";
import strains from "../data/strains";
import GUI from "lil-gui";
import { mapping } from "../utils/cal";
import Globe, { GlobeMethods } from "react-globe.gl";

const GlobeDefault = () => {
  const globeEl = useRef<GlobeMethods>();
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

  useEffect(() => {
    if (globeEl.current != undefined) {
      console.log(globeEl.current);
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
    }
  }, [globeEl]);

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
      ref={globeEl}
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
      animateIn={true}
    />
  );
};
export default GlobeDefault;

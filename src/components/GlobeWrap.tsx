import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import { GlobeMethods } from "react-globe.gl";

const GlobeWrap = () => {
  const GlobeDefault = dynamic(() => import("./Globe"), {
    // suspense: true,
    ssr: false,
  });
  return <GlobeDefault />;
};

export default GlobeWrap;

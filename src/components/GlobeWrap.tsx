import dynamic from "next/dynamic";
import React from "react";

const GlobeWrap = () => {
  const GlobeDefault = dynamic(() => import("./Globe"), {
    ssr: false,
  });
  return <GlobeDefault />;
};

export default GlobeWrap;

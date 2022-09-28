import { useEffect, useRef } from "react";
import Vivus from "vivus";
import file from "./tulips.svg";

import "./style.css";

export const LogoGraphic = () => {
  const svg = useRef();

  useEffect(() => {
    svg.current.replaceChildren();
    new Vivus(
      svg.current,
      {
        file,
        type: "oneByOne",
        duration: 400,
      },
      null
    );
  }, []);

  return <div id="logo-graphic" ref={svg}></div>;
};

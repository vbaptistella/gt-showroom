import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import "./styles/layoutIcon.css";

export default function LayoutIcon({ carData }) {
  const [ap, setAp] = useState({});
  let activeParts = {
    w: {
      fl: false,
      fr: false,
      rl: false,
      rr: false,
    },
    e: {
      f: false,
      m: false,
      r: false,
    },
  };

  useEffect(() => {
    const layoutShort = Array.from(carData.drivetrain);
    if (layoutShort[1] === "f" || layoutShort[1] === "a") {
      activeParts.w.fl = true;
      activeParts.w.fr = true;
    }
    if (layoutShort[1] === "r" || layoutShort[1] === "a") {
      activeParts.w.rl = true;
      activeParts.w.rr = true;
    }

    activeParts.e[layoutShort[0]] = true;

    setAp(activeParts);
  }, []);

  return (
    <div>
      {ap.w && (
        <div className="car-body">
          <div className="axle front">
            <div
              className={`wheel front-left ${ap.w.fl ? "active" : ""}`}
            ></div>
            <div className={`engine front ${ap.e.f ? "active" : ""}`}></div>
            <div
              className={`wheel front-right ${ap.w.fr ? "active" : ""}`}
            ></div>
          </div>
          <div className="layout-name">{carData.drivetrain.toUpperCase()}</div>
          <div className="axle rear">
            <div className={`wheel rear-left ${ap.w.rl ? "active" : ""}`}></div>
            <div className={`engine mid ${ap.e.m ? "active" : ""}`}></div>
            <div className={`engine rear ${ap.e.r ? "active" : ""}`}></div>
            <div
              className={`wheel rear-right ${ap.w.rr ? "active" : ""}`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

LayoutIcon.propTypes = {
  carData: PropTypes.object.isRequired,
};

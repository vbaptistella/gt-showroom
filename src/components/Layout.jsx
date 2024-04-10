/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./styles/layout.css";
import AboutModal from "./AboutModal";

export default function Layout({ brandName, carName }) {
  const [parentPath, setParentPath] = useState("");
  const [path, setPath] = useState([]);
  const [aboutModal, setAboutModal] = useState(false);
  const location = useLocation();

  const bgVideoRef = useRef();

  useEffect(() => {
    const parentPathFromUrl = window.location.pathname
      .split("/")
      .filter((item) => item !== "");
    parentPathFromUrl.pop();

    setPath(window.location.pathname.split("/"));
    setParentPath(parentPathFromUrl.join("/"));
  }, [location]);

  useEffect(() => {
    bgVideoRef.current.playbackRate = 0.5;
    bgVideoRef.current.play();
  });

  return (
    <>
      <div id="header">
        {location.pathname !== "/" && (
          <>
            <Link to={parentPath}>
              <button className="back-button gt6-btn">
                <span className="material-icons">arrow_back</span>
              </button>
            </Link>
            <Link to="/">
              <button className="home-button gt6-btn">
                <span className="material-icons">home</span>
              </button>
            </Link>
            <div className="breadcrumbs">
              {path.map((stage, index) => {
                if (stage)
                  return (
                    <>
                      {index > 0 && (
                        <span className="material-icons">chevron_right</span>
                      )}
                      <div className="breadcrumb-stage" key={stage}>
                        {index === 2 ? brandName : null}
                        {index === 3 ? carName : null}
                        {index < 2 ? stage : null}
                      </div>
                    </>
                  );
              })}
            </div>
          </>
        )}
        <div className="gt-logo">
          <img src="/img/gtlogo.png" />
        </div>
        <button
          className="about-button ui-button"
          onClick={() => setAboutModal(true)}
        >
          <span className="material-icons">info</span>About
        </button>
      </div>
      <video
        ref={bgVideoRef}
        id="bgVideo"
        width="1920"
        height="1080"
        muted
        loop
      >
        <source src="/videos/bg-waves.mp4" type="video/mp4" />
      </video>
      <main>
        {aboutModal && <AboutModal setAboutModal={setAboutModal} />}
        <Outlet />
      </main>
    </>
  );
}

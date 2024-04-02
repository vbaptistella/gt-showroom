import { useState, useEffect, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./styles/layout.css";

export default function Layout() {
  const [parentPath, setParentPath] = useState("");
  const [path, setPath] = useState([]);
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
    console.log(bgVideoRef.current.defaultPlaybackRate);
  });

  return (
    <>
      <div id="header">
        {location.pathname !== "/" && (
          <>
            <Link to={parentPath}>
              <button className="back-button">
                <span className="material-icons">arrow_back</span> Back
              </button>
            </Link>
            <Link to="/">
              <button className="home-button">
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
                        {stage}
                      </div>
                    </>
                  );
              })}
            </div>
          </>
        )}
      </div>
      <video
        ref={bgVideoRef}
        id="bgVideo"
        width="1920"
        height="1080"
        muted
        loop
      >
        <source src="/src/assets/videos/bg-waves.mp4" type="video/mp4" />
      </video>
      <main>
        <Outlet />
      </main>
    </>
  );
}

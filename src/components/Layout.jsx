import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import "./styles/layout.css";

export default function Layout() {
  const [parentPath, setParentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    const parentPathFromUrl = window.location.pathname
      .split("/")
      .filter((item) => item !== "");
    parentPathFromUrl.pop();

    setParentPath(parentPathFromUrl.join("/"));
  }, [location]);

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
              <button className="back-button">
                <span className="material-icons">home</span>
              </button>
            </Link>
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}

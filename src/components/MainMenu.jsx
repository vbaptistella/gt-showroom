import { Link } from "react-router-dom";

import "./styles/mainMenu.css";
import { useEffect, useState } from "react";

export default function MainMenu() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[]);
  
  return (
    <div id="mainMenu" className={!loading && "active"}>
      <Link to={`/new`}>
        <div className="card-button">New Cars</div>
      </Link>
      {/* <Link to={`/used`}> */}
      <div className="card-button disabled">
        Used Cars<i>Coming soon</i>
      </div>
      {/* </Link> */}
      {/* <Link to={`/classic`}> */
      /* <div className="card-button disabled">
        Classic Cars<i>Coming soon</i>
      </div> */
      /* </Link> */}
    </div>
  );
}

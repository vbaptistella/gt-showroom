import { Link } from "react-router-dom";

import "./styles/mainMenu.css";

export default function MainMenu() {
  return (
    <div id="mainMenu">
      <Link to={`/new`}>
        <div className="card-button">New Cars</div>
      </Link>
      <Link to={`/used`}>
        <div className="card-button">Used Cars</div>
      </Link>
    </div>
  );
}

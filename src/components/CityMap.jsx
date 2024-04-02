import { districts } from "../assets/data/districts";
import { Link } from "react-router-dom";

import "./styles/cityMap.css";

import MapIcon from "./MapIcon";

export default function CityMap() {
  return (
    <div id="cityMap">
      {Object.values(districts).map((district) => (
        <Link to={`/${district.id}`} key={district.id}>
          <MapIcon type="district" data={district} />
        </Link>
      ))}
    </div>
  );
}

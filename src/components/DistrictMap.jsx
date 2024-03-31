import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { districts } from "../assets/data/districts";
import MapIcon from "./MapIcon";

import './styles/districtMap.css'

export default function DistrictMap() {
  const [district, setDistrict] = useState("");

  useEffect(() => {
    const districtFromUrl = window.location.pathname.split("/")[1];
    console.log(districts[districtFromUrl]);
    setDistrict(districtFromUrl);
  }, []);

  return (
    <div id="districtMap" className={district}>
      {district &&
        districts[district].brands.map((brand) => (
          <Link to={`/${district}/${brand.id}`} key={brand.id}>
            <MapIcon type="brand" data={brand} />
          </Link>
        ))}
    </div>
  );
}

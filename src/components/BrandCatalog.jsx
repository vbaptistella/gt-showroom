import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCarsFromBrand } from "../services/carService";

import "./styles/brandCatalog.css";

export default function BrandCatalog() {
  const [brand, setBrand] = useState("");
  const [brandCatalog, setBrandCatalog] = useState([]);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];

    setBrand(brandFromUrl);
    getCarsFromBrand(brandFromUrl).then((data) => {
      setBrandCatalog(data);
    });
  }, []);

  return (
    <>
      <ul className="car-list">
        {brandCatalog.map((car) => {
          return (
            <Link key={car.id} to={car.id}>
              <li className="car-item">
                <div className="car-thumb">
                  <img src={`/src/assets/models/${brand}/${car.id}/thumb.png`} />
                </div>
                <div className="car-data">
                  <div>
                    {car.name} {car.version}
                  </div>
                  <div>
                    {car.year} {car.price}
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

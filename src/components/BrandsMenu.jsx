/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../services/carService";
import { brandLogos } from "../assets/data/brandLogos";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./styles/brandsMenu.css";

export default function BrandsMenu() {
  const [brands, setBrands] = useState("");

  useEffect(() => {
    getBrands().then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <div id="brandsMenu">
      {brands &&
        brands.map((brand) => (
          <Link to={`/new/${brand.id}`} key={brand.id}>
            <div className="card-button">
              {/* <span className={`fi fi-${brand.country}`}></span> */}
              <div className="brand-logo">
                <img src={brandLogos[brand.id]} />
              </div>
              {brand.name || brand.error}
            </div>
          </Link>
        ))}
    </div>
  );
}

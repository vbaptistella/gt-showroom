import { useState, useEffect, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../services/carService";
import { brandLogos } from "../assets/data/brandLogos";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import "./styles/brandsMenu.css";
import Loading from "./Loading";

export default function BrandsMenu() {
  const [brands, setBrands] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBrands()
      .then((data) => {
        setBrands(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? <Loading fullscreen message={"Fetching backend"} /> : null}
      {error ? <p>Error fetching backend</p> : ""}
      <div id="brandsMenu" className={!loading && "active"}>
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
    </>
  );
}

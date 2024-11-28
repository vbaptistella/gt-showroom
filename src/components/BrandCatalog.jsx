import { useState, useEffect } from "react";
import { getCarsFromBrand } from "../services/carService";
import CarItem from "./CarItem";
import { getBrandData } from "../services/carService";
import { brandLogos } from "../assets/data/brandLogos";

import "./styles/brandCatalog.css";

export default function BrandCatalog({ brandData, setBrandData }) {
  const [brand, setBrand] = useState("");
  const [roadCatalog, setRoadCatalog] = useState([]);
  const [raceCatalog, setRaceCatalog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];

    getBrandData(brandFromUrl).then((data) => setBrandData(data));
    setBrand(brandFromUrl);
    getCarsFromBrand(brandFromUrl).then((data) => {
      const roadCars = data.filter((car) => car.type !== "race");
      const raceCars = data.filter((car) => car.type === "race");
      setRoadCatalog(
        roadCars.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price) ? 1 : -1
        )
      );
      setRaceCatalog(
        raceCars.sort((a, b) =>
          parseInt(a.price) > parseInt(b.price) ? 1 : -1
        )
      );
      setLoading(false);
    });
  }, []);

  return (
    <div className={`brand-catalog ${!loading && "active"}`}>
      <div className="brand-data">
        <div className="brand-logo-container">
          <div className="brand-logo">
            <img src={brandLogos[brandData.id]} />
          </div>
          {/* <h2>{brandData.name}</h2> */}
        </div>
        <div className="brand-description">
          <p>{brandData.description}</p>
        </div>
      </div>
      <h3>Road Cars</h3>
      <ul className="car-list">
        {roadCatalog.map((car) => {
          return <CarItem key={car.id} brand={brand} car={car} />;
        })}
      </ul>
      <h3>Race Cars</h3>
      <ul className="car-list">
        {raceCatalog.map((car) => {
          return <CarItem key={car.id} brand={brand} car={car} />;
        })}
      </ul>
    </div>
  );
}

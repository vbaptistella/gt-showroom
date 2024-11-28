import { useState, useEffect } from "react";
import { getCarsFromBrand } from "../services/carService";
import CarItem from "./CarItem";
import { getBrandData } from "../services/carService";
import { usedCars } from "../assets/data/catalogs/usedCars";

import "./styles/brandCatalog.css";

export default function UsedCatalog({ brandData, setBrandData }) {
  const [brand, setBrand] = useState("");
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];

    getBrandData(brandFromUrl).then((data) => setBrandData(data));
    setBrand(brandFromUrl);
    setCatalog(
      usedCars.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1))
    );
  }, []);

  return (
    <>
      <h3>Used Cars</h3>
      <ul className="car-list">
        {catalog.map((car) => {
          return (
            <CarItem
              key={car.id}
              colour={car.colour}
              brand={car.brand}
              car={car}
              km={car.km}
              price={car.price}
            />
          );
        })}
      </ul>
    </>
  );
}

import { useState, useEffect } from "react";
import { getCarsFromBrand } from "../services/carService";
import CarItem from "./CarItem";

import "./styles/brandCatalog.css";

export default function BrandCatalog() {
  const [brand, setBrand] = useState("");
  const [roadCatalog, setRoadCatalog] = useState([]);
  const [raceCatalog, setRaceCatalog] = useState([]);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];

    setBrand(brandFromUrl);
    getCarsFromBrand(brandFromUrl).then((data) => {
      const roadCars = data.filter((car) => car.type !== "race");
      const raceCars = data.filter((car) => car.type === "race");
      setRoadCatalog(roadCars.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1)));
      setRaceCatalog(raceCars.sort((a, b) => (parseInt(a.price) > parseInt(b.price) ? 1 : -1)));
    });
  }, []);

  return (
    <>
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
    </>
  );
}

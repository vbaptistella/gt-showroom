import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CityMap from "./components/CityMap";
import DistrictMap from "./components/DistrictMap";
import BrandCatalog from "./components/BrandCatalog";
import CarDisplay from "./components/CarDisplay";
import "./App.css";

export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<CityMap setSelectedDistrict={setSelectedDistrict} />}
            />
            <Route
              path="/:district"
              element={
                <DistrictMap
                  selectedDistrict={selectedDistrict}
                  setSelectedBrand={setSelectedBrand}
                />
              }
            />
            <Route
              path="/:district/:brand"
              element={
                <BrandCatalog
                  selectedBrand={selectedBrand}
                  setSelectedCar={setSelectedCar}
                />
              }
            />
            <Route
              path="/:district/:brand/:vehicle"
              element={<CarDisplay selectedCar={selectedCar} />}
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

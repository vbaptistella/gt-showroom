import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainMenu from "./components/MainMenu";
import BrandsMenu from "./components/BrandsMenu";
import BrandCatalog from "./components/BrandCatalog";
import CarDisplay from "./components/CarDisplay";
import "./App.css";

export default function App() {
  const [carName, setCarName] = useState("");
  const [brandData, setBrandData] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout brandName={brandData.name} carName={carName} />}
          >
            <Route index element={<MainMenu />} />
            <Route path="/new" element={<BrandsMenu />} />
            <Route
              path="/new/:brand"
              element={
                <BrandCatalog
                  brandData={brandData}
                  setBrandData={setBrandData}
                />
              }
            />
            <Route
              path="/new/:brand/:vehicle"
              element={<CarDisplay setCarName={setCarName} />}
            />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

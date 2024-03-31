import { useState, useEffect, useRef } from "react";
import { getCarData } from "../services/carService";

import "./styles/carDisplay.css";

export default function CarDisplay() {
  const [carId, setCarId] = useState("");
  const [brand, setBrand] = useState("");
  const [carData, setCarData] = useState({});
  const [carColourId, setCarColourId] = useState(0);
  const [carColourName, setCarColourName] = useState("");

  const modelViewer = useRef(null);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];
    const carFromUrl = window.location.pathname.split("/")[3];

    setCarId(carFromUrl);
    setBrand(brandFromUrl);
    if (carId && brand) {
      getCarData(brand, carId).then((data) => {
        setCarData(data);
      });
    }
  }, [brand, carId]);

  const handleColourChange = (index, name) => {
    setCarColourId(index);
    setCarColourName(name);

    if (modelViewer.current) {
      const materialList = modelViewer.current.model.materials;
      materialList.forEach((material) => {
        modelViewer.current
          .createTexture(
            `/src/assets/models/${brand}/${carId}/textures/${carId}_${carColourId}.png`
          )
          .then((texture) => {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
          });
      });
    }
  };

  return (
    <>
      {carData.name && (
        <>
          <model-viewer
            ref={modelViewer}
            alt={carData.name}
            src={`/src/assets/models/${brand}/${carId}/${carId}.glb`}
            disable-pan
            disable-zoom
            auto-rotate
            auto-rotate-delay="200"
            interaction-prompt="none"
            camera-orbit="225deg 85deg 105%"
            rotation-per-second="15deg"
            environment-image=""
            shadow-intensity="2"
            camera-controls
            min-camera-orbit="auto 85deg auto"
            max-camera-orbit="auto 85deg auto"
            touch-action="pan-y"
          ></model-viewer>
          <div className="car-viewer-data">
            <p>{carData.year}</p>
            <h2>{carData.name}</h2>
            <p>{carData.version}</p>
          </div>
          <div className="car-colours">
            <div className="car-colour-list">
              {Object.keys(carData.colours).map((colour, index) => (
                <p key={colour}>
                  <button
                    onClick={() => handleColourChange(index, colour)}
                    style={{ backgroundColor: carData.colours[colour] }}
                  ></button>
                </p>
              ))}
            </div>
            {carColourName && <span>{carColourName}</span>}
          </div>
        </>
      )}
    </>
  );
}

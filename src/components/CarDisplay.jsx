/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { getCarData } from "../services/carService";
import ColourButton from "./ColourButton";
import TechnicalData from "./TechnicalData";

import "./styles/carDisplay.css";

export default function CarDisplay({ setCarName }) {
  const [carId, setCarId] = useState("");
  const [brand, setBrand] = useState("");
  const [carData, setCarData] = useState({});
  const [carColourId, setCarColourId] = useState(0);
  const [isInitialColour, setIsInitialColour] = useState(false);
  const [carColourName, setCarColourName] = useState("");

  const modelViewer = useRef(null);

  useEffect(() => {
    const brandFromUrl = window.location.pathname.split("/")[2];
    const carFromUrl = window.location.pathname.split("/")[3];

    setBrand(brandFromUrl);
    setCarId(carFromUrl);
    if (carId && brand) {
      getCarData(brand, carId).then((data) => {
        setCarData(data);
        setCarName(data.name);
        setCarColourName();
      });
    }
  }, [brand, carId]);

  const handleColourChange = (index) => {
    setCarColourId(index);
    setCarColourName(carData.colours[index].name);

    if (modelViewer.current) {
      const materialList = modelViewer.current.model.materials;
      materialList.forEach((material) => {
        modelViewer.current
          .createTexture(
            `/src/assets/models/${brand}/${carId}/textures/${index}.png`
          )
          .then((texture) => {
            material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
            const sampler =
              material.pbrMetallicRoughness["baseColorTexture"].texture.sampler;
            sampler.setMagFilter(9728);
            sampler.setMinFilter(9728);
          })
          .catch(() => {
            console.error("Error loading texture");
          });
      });
    }
  };

  const afterLoad = () => {
    if (!isInitialColour) {
      const initialColour = carData.defaultColour || 0;
      setTimeout(() => {
        handleColourChange(initialColour);
        setIsInitialColour(true);
      }, 200);
      setTimeout(() => {
        modelViewer.current.attributes["camera-target"].value = "0 0 0";
        modelViewer.current.style.opacity = 1;
      }, 500);
    }
  };

  return (
    <>
      {carData.name && (
        <>
          <div className="car-viewer-data-container">
            <div className="car-viewer-data">
              <div className="basic-info">
                <p>{carData.year}</p>
                <h2>{carData.name}</h2>
                <p>{carData.version}</p>
              </div>
            </div>
          </div>
          <model-viewer
            ref={modelViewer}
            alt={carData.name}
            src={`/src/assets/models/${brand}/${carId}/${carId}.glb`}
            disable-pan
            disable-zoom
            auto-rotate
            auto-rotate-delay="200"
            interaction-prompt="none"
            camera-orbit="225deg 85deg 8m"
            camera-target="-1m 0 -1m"
            rotation-per-second="15deg"
            environment-image=""
            shadow-intensity="2"
            camera-controls
            load={afterLoad()}
            min-camera-orbit="auto 85deg auto"
            max-camera-orbit="auto 85deg auto"
            touch-action="pan-y"
          />

          <div className="car-data-bottom">
            <div className="car-colours-container">
              <div className="car-colours">
                <div className="car-colour-list">
                  {carData.colours.map((colour, index) => (
                    <ColourButton
                      key={colour.hex || colour.name}
                      colour={colour}
                      index={index}
                      carColourId={carColourId}
                      handleColourChange={handleColourChange}
                    />
                  ))}
                  {carColourName && (
                    <span className="car-colour-name">{carColourName}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="price">
              <button
                className={`buy-button ${carData.price === "-" && "disabled"}`}
              >
                {carData.price === "-"
                  ? "Not for Sale"
                  : `Cr. ${carData.price}`}
              </button>
            </div>

            <TechnicalData carData={carData} />
          </div>
        </>
      )}
    </>
  );
}

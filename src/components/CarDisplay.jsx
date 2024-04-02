import { useState, useEffect, useRef } from "react";
import { getCarData } from "../services/carService";

import "./styles/carDisplay.css";

export default function CarDisplay() {
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

  const test = () => {
    if (!isInitialColour) {
      const initialColour = carData.defaultColour || 0;
      handleColourChange(initialColour);
      setIsInitialColour(true);
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
              <div className="technical-data">
                <h4>Drivetrain</h4>
                <div className="data-table">
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Engine</div>
                    <div className="data-table-cell-value">
                      {carData.engine.type} {carData.engine.displacement}
                    </div>
                  </div>
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Power</div>
                    <div className="data-table-cell-value">
                      {carData.engine.power} BHP
                    </div>
                  </div>
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Layout</div>
                    <div className="data-table-cell-value">
                      {carData.drivetrain.toUpperCase()}
                    </div>
                  </div>
                </div>
                <h4>Dimensions</h4>
                <div className="data-table">
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Length</div>
                    <div className="data-table-cell-value">
                      {carData.dimensions.length} mm
                    </div>
                  </div>
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Width</div>
                    <div className="data-table-cell-value">
                      {carData.dimensions.width} mm
                    </div>
                  </div>
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Height</div>
                    <div className="data-table-cell-value">
                      {carData.dimensions.height} mm
                    </div>
                  </div>
                  <div className="data-table-row">
                    <div className="data-table-cell-key">Weight</div>
                    <div className="data-table-cell-value">
                      {carData.dimensions.weight} kg
                    </div>
                  </div>
                </div>
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
            camera-orbit="225deg 85deg 105%"
            rotation-per-second="15deg"
            environment-image=""
            shadow-intensity="2"
            camera-controls
            load={test()}
            min-camera-orbit="auto 85deg auto"
            max-camera-orbit="auto 85deg auto"
            touch-action="pan-y"
          />
          <div className="stage">
            <div className="ground"></div>
            <div className="panel"></div>
          </div>

          <div className="car-data-bottom">
            <div className="car-colours">
              <div className="car-colour-list">
                {carData.colours.map((colour, index) => {
                  let colourValue;
                  if (colour.livery) {
                    colourValue = `linear-gradient(180deg, 
                  ${colour.livery[0]} 0%,
                  ${colour.livery[0]} 33%,
                  ${colour.livery[1]} 33%,
                  ${colour.livery[1]} 66%,
                  ${colour.livery[2]} 66%,
                  ${colour.livery[2]} 100%)`;
                  } else {
                    colourValue = colour.hex;
                  }
                  return (
                    <p key={colour.hex || colour.name}>
                      <button
                        className={index === carColourId ? "active" : null}
                        onClick={() => handleColourChange(index)}
                        style={{ background: colourValue }}
                      ></button>
                    </p>
                  );
                })}
              </div>
              {carColourName && <span>{carColourName}</span>}
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
          </div>
        </>
      )}
    </>
  );
}

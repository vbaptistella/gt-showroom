/* eslint-disable react/prop-types */
import { brandLogos } from "../assets/data/brandLogos";
import "./styles/mapIcon.css";

export default function MapIcon({ type, data }) {
  return (
    <div className="map-icon" style={{ left: data.pos[0], top: data.pos[1] }}>
      {type === "district" && (
        <span className={`material-icons district ${data.id}`}>
          location_city
        </span>
      )}
      {type === "brand" && brandLogos[data.name.toLowerCase()] && (
        <span className="brand-logo">
          <img src={brandLogos[data.name.toLowerCase()]} />
        </span>
      )}
      <p>{data.name}</p>
    </div>
  );
}

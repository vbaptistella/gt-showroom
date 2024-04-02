/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function CarItem({ car, brand }) {
  return (
    <Link key={car.id} to={car.id}>
      <li className="car-item">
        <div className="car-thumb">
          <img src={`/src/assets/models/${brand}/${car.id}/thumb.png`} />
        </div>
        <div className="car-data">
          <div>
            {car.name} {car.version}
          </div>
          <div className="car-values">
            <div className="car-year">{car.year}</div>
            <div className="car-price">Cr. {car.price}</div>
          </div>
        </div>
      </li>
    </Link>
  );
}

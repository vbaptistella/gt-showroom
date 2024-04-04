import { PropTypes } from "prop-types";
import LayoutIcon from "./LayoutIcon";

export default function TechnicalData({ carData }) {
  return (
    <div className="technical-data">
      <div className="layout-container">
        <LayoutIcon carData={carData} />
      </div>
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
      </div>
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
      </div>
      <div className="data-table">
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
  );
}

TechnicalData.propTypes = {
  carData: PropTypes.object.isRequired,
};

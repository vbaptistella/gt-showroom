import { PropTypes } from "prop-types";

export default function ColourButton({
  colour,
  index,
  carColourId,
  handleColourChange,
}) {
  let borderColour;
  let colourValue;
  if (colour.livery) {
    borderColour = colour.livery[0];
    colourValue = `linear-gradient(180deg, 
        ${colour.livery[0]} 0%,
        ${colour.livery[0]} 33%,
        ${colour.livery[1]} 33%,
        ${colour.livery[1]} 66%,
        ${colour.livery[2]} 66%,
        ${colour.livery[2]} 100%)`;
  } else {
    colourValue = colour.hex;
    borderColour = colour.hex;
  }

  return (
    <div>
      <button
        className={index === carColourId ? "active" : null}
        onClick={() => handleColourChange(index)}
        style={{ background: colourValue, borderColor: borderColour}}
      ></button>
    </div>
  );
}

ColourButton.propTypes = {
  colour: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  carColourId: PropTypes.number.isRequired,
  handleColourChange: PropTypes.func.isRequired,
};

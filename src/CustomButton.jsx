import React from "react";
import PropTypes from "prop-types";

function CustomContainer(props) {
  return (
    <div className="custom-container">
      <p className="text-expertise">{props.name}</p>
    </div>
  );
}

CustomContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

CustomContainer.defaultProps = {
    name: "Guest",
}

export default CustomContainer;

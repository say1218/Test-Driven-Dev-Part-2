import React from "react";
import PropTypes from "prop-types";

const CarouselButton = (props) => <button {...props} />;

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
}; //not required, but nevertheless

//The node type means that children can be either a React element or a primitive, such as a string.

export default CarouselButton;

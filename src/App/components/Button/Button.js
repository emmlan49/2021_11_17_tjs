import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

/**
 * Composant Button HTML
 * @param {object} props props du composant Button
 * @returns component render
 */
const Button = (props) => {
  return (
    <button
      className="Button"
      style={{ backgroundColor: props.bgColor, color: props.color }}
      onClick={(evt) => {
        // évènement géré par le composant, donc pas renvoyé au parent
        props.onButtonClicked();
      }}
    >
      {props.text}
    </button>
  );
};

/**
 * prototype attendu
 */
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

/**
 * valeurs par défaut du props
 */
Button.defaultProps = {
  bgColor: "yellowgreen",
  color: "white",
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

/**
 * import de style pour gérer les concurrences des CSS (donc évite la collision des classes)
 */
import style from "./Button.module.css";

/**
 * Composant Button HTML
 * @param {object} props props du composant Button
 * @returns component render
 */
const Button = (props) => {
  return (
    <button
      // appel du module CSS via la propriété style
      className={style.Button}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style, // style déversé par le parent. en dernière position pour être prioritaire
      }}
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
  style: PropTypes.object,
};

/**
 * valeurs par défaut du props
 */
Button.defaultProps = {
  bgColor: "yellowgreen",
  color: "white",
};

export default Button;

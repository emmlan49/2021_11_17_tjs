import React, { useEffect, useState } from "react";
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
  const [clicked, setClicked] = useState({
    state: false,
    autreValue: "Demo bouton",
  });

  useEffect(() => {
    // si le bouton est déjà à l'état initial, on ne modifie pas l'état
    if (!clicked.state) {
      return;
    }

    // remet le champ à l'état initial
    setTimeout(() => {
      setClicked({ ...clicked, state: false });
    }, 500);

    // retourne la fonction de "willunmount"
    // return () => {
    //   cleanup
    // }
  }, [clicked]);

  return (
    <button
      /** 
      appel du module CSS via la propriété style
      
      remarque :
      condition ternaire : au clic / déclic, on applique le CSS dynamiquement  
       */
      className={`${style.Button}${clicked.state ? " " + style.clicked : ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style, // style déversé par le parent. en dernière position pour être prioritaire
      }}
      type={props.type}
      onClick={(evt) => {
        setClicked({ ...clicked, state: true });
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
  type: PropTypes.string,
};

/**
 * valeurs par défaut du props
 */
Button.defaultProps = {
  bgColor: "yellowgreen",
  color: "white",
};

export default Button;

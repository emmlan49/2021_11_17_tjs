import React from "react";
import PropTypes from "prop-types";
import styles from "./Flexlayout.module.scss";

const Flexlayout = (props) => {
  return (
    <div className={styles.Flexlayout} data-testid="Flexlayout">
      {props.children}
    </div>
  );
};

Flexlayout.propTypes = {
  children: PropTypes.array.isRequired,
};

Flexlayout.defaultProps = {};

export default Flexlayout;

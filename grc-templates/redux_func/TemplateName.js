import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import style from "./TemplateName.module.scss";

const TemplateName = (props) => {
  return <div className={style.TemplateName} date-testid="TemplateName"></div>;
};

TemplateName.propTypes = {
  props: PropTypes,
};

function mapStateToProps(state, own) {
  return { ...own };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);

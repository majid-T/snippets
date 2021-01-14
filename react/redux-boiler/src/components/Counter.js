import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  return <p>{value}</p>;
};

Counter.propTypes = {
  value: PropTypes.number,
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

export default connect(mapStateToProps)(Counter);
